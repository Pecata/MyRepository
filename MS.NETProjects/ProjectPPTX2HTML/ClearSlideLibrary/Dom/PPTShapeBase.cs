using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Presentation;
using DocumentFormat.OpenXml;
using System.Collections.Generic;
using System;
using System.Globalization;
using System.Linq;


namespace ClearSlideLibrary.Dom
{
    public class PPTShapeBase
    {
        public PPTVisualPPTShapeProp VisualShapeProp { get; set; }
        public PPTNonVisualShapeProp NonVisualShapeProp { get; set; }
        public bool Invisible { get; set; }
        public bool Animatable { get; set; }
        public String ClickLinkUrl { get; set; }
        public String HoverLinkUrl { get; set; }
        public DocumentFormat.OpenXml.Drawing.ListStyle shapeListStyleMaster { get; set; }
        public DocumentFormat.OpenXml.Drawing.ListStyle shapeListStyleLayout { get; set; }
        public DocumentFormat.OpenXml.Drawing.TextAnchoringTypeValues VerticalAlign { get; set; }
        public int fontScale = 100000;
        public int BottomInset { get; set; }
        public int TopInset { get; set; }
        public int LeftInset { get; set; }
        public int RightInset { get; set; }

        public PPTShapeBase()
        {
            //Default values for the inserts are part of the inch. One inch is 72pixels
            int inchPixel=72; 
            BottomInset= inchPixel/20;
            TopInset=inchPixel/20;
            LeftInset=inchPixel/10;
            RightInset = inchPixel/10;

        }
        protected void SetSlideLayoutVisualShapeProperties(SlidePart slidePart, Shape shape)
        {
            VisualShapeProp = new PPTVisualPPTShapeProp();

            ShapeTree shapeTree =
                slidePart.SlideLayoutPart.SlideLayout.CommonSlideData.ShapeTree;

            if (shapeTree != null)
            {
              //  var layoutShape = shapeTree.GetFirstChild<Shape>();
                GetShapesPropFromMasterPartLayout(slidePart, shape, 1);
                fillPropertiesFromMasterShape(shape, false, false);
            }
        }

        private void FillFromInheritedShapes(IEnumerable<Shape> masterShapes, PlaceholderShape placeholderFromShape, bool isLayout){

            if (placeholderFromShape.Index != null && placeholderFromShape.Index.HasValue &&
                 placeholderFromShape.Type != null && placeholderFromShape.Type.HasValue)
            {
                foreach (Shape masterShape in masterShapes)
                    if (masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape != null &&
                        masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Index != null &&
                           masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Index.HasValue &&
                            masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Index.Value ==
                            placeholderFromShape.Index.Value &&
                        masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Type != null &&
                            masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Type.HasValue &&
                             masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Type.Value ==
                             placeholderFromShape.Type.Value)
                    {
                        fillPropertiesFromMasterShape(masterShape, isLayout, true);
                        return;
                    }
            }


            
            if (placeholderFromShape.Index != null && placeholderFromShape.Index.HasValue)
            {

                foreach (Shape masterShape in masterShapes)
                    if (masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape != null &&
                        masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Index != null &&
                           masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Index.HasValue &&
                            masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Index.Value ==
                            placeholderFromShape.Index.Value)
                        {
                            fillPropertiesFromMasterShape(masterShape, isLayout,true);
                            return;
                        }
            }

            if (placeholderFromShape.Type != null && placeholderFromShape.Type.HasValue)
            {
               foreach (Shape masterShape in masterShapes)                    
                    {
                        if (masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape != null &&
                            masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Type != null &&
                            masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Type.HasValue &&
                             masterShape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape.Type.Value ==
                             placeholderFromShape.Type.Value)
                          {
                              fillPropertiesFromMasterShape(masterShape, isLayout, true);
                              return;
                          }                          
                      } 
             }
                

            
        }
        private void GetShapesPropFromMasterPartLayout(SlidePart slidePart, Shape shape, int slideNumber)
        {

            if (shape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape == null) //If there is no placeholder
                return; 
            IEnumerator<SlideLayoutPart> slPart = slidePart.SlideLayoutPart.
                SlideMasterPart.SlideLayoutParts.GetEnumerator();

        

            var masterShapes =slidePart.SlideLayoutPart.SlideMasterPart.SlideMaster.CommonSlideData.ShapeTree.Descendants<Shape>();
            FillFromInheritedShapes(masterShapes, shape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape,false);
            var layoutShapes = slidePart.SlideLayoutPart.SlideLayout.Descendants<Shape>();
            FillFromInheritedShapes(layoutShapes, shape.NonVisualShapeProperties.ApplicationNonVisualDrawingProperties.PlaceholderShape,true );

        }

        private void fillPropertiesFromMasterShape(DocumentFormat.OpenXml.Presentation.Shape masterShape, bool isLayout, bool addListStyle)
        {
            if (null != masterShape.TextBody)
            {
                if (masterShape.TextBody.ListStyle != null && addListStyle)
                {
                    if(isLayout)
                        shapeListStyleLayout = masterShape.TextBody.ListStyle;
                    else
                        shapeListStyleMaster = masterShape.TextBody.ListStyle;
                }
                if (masterShape.TextBody.BodyProperties != null && masterShape.TextBody.BodyProperties.Anchor!=null)
                    VerticalAlign = masterShape.TextBody.BodyProperties.Anchor;
                if(masterShape.TextBody.BodyProperties.TopInset != null){
                    TopInset = (int)Math.Round((double)masterShape.TextBody.BodyProperties.TopInset.Value / 12700);
                }
                if(masterShape.TextBody.BodyProperties.BottomInset != null){
                    BottomInset=(int)Math.Round((double)masterShape.TextBody.BodyProperties.BottomInset.Value / 12700);
                }
                if(masterShape.TextBody.BodyProperties.RightInset != null){
                    RightInset = (int)Math.Round((double)masterShape.TextBody.BodyProperties.RightInset.Value / 12700);
                }
                if(masterShape.TextBody.BodyProperties.LeftInset != null){
                    LeftInset = (int)Math.Round((double)masterShape.TextBody.BodyProperties.LeftInset.Value / 12700);
                }
                
                if (masterShape.TextBody.BodyProperties != null && 
                    masterShape.TextBody.BodyProperties.GetFirstChild<DocumentFormat.OpenXml.Drawing.NormalAutoFit>() != null &&
                      masterShape.TextBody.BodyProperties.GetFirstChild<DocumentFormat.OpenXml.Drawing.NormalAutoFit>().FontScale != null)
                    fontScale = masterShape.TextBody.BodyProperties.GetFirstChild<DocumentFormat.OpenXml.Drawing.NormalAutoFit>().FontScale.Value;
            }
            if (masterShape.ShapeProperties.Transform2D != null)
            {
                VisualShapeProp.Extents = masterShape.ShapeProperties.Transform2D.Extents;
                VisualShapeProp.Offset = masterShape.ShapeProperties.Transform2D.Offset;
            }
        }
    }
}