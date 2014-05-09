﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Drawing;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Presentation;

namespace ClearSlideLibrary.Dom.PPTTexts
{
    public class PPTParagraph
    {

        public List<PPTRunProperties> RunPropList { get; set; }
        public string Align { get; set; }//ctr, l, r, just, dist, thai, justLow
        public string FontAlign { get; set; }//auto, b, base, ctr, t
        public Int32 Indent { get; set; }
        public Int32 Level { get; set; }
        public Int32 marginLeft { get; set; }
        public Int32 marginRight { get; set; }
        public Int32 defTabSize { get; set; }
        public bool Invisible { get; set; }
        public bool Animatable { get; set; }
        public int Paragraph { get; set; }
        public PPTRunProperties bullet = null;
        public PPTRunProperties defaultRunProperties { get; set; }
        public DocumentFormat.OpenXml.Drawing.SpaceAfter spaceAfter { get; set; }
        public DocumentFormat.OpenXml.Drawing.SpaceBefore spaceBefore { get; set; }
        public DocumentFormat.OpenXml.Drawing.LineSpacing lineSpacing { get; set; }
        public PPTSlide slide { get; set; }
        private PlaceholderShape placeholder;

        public PPTParagraph(PPTSlide slide, PlaceholderShape placeholder)
        {
            this.slide = slide;
            this.Align = "";
            this.FontAlign = "";
            this.Indent = 0;
            this.Level = 0;
            this.marginLeft = 0;
            this.marginRight = 0;
            this.placeholder = placeholder;
            this.defTabSize = 0;
            RunPropList = new List<PPTRunProperties>();
        }


        public int getLineSpacingInPointsFromFont(int fontHeight)
        {
            if (lineSpacing == null)
                return fontHeight;
            if (lineSpacing.SpacingPoints != null)
                return lineSpacing.SpacingPoints.Val;
            if (lineSpacing.SpacingPercent != null)
                return lineSpacing.SpacingPercent.Val * fontHeight / Globals.PercentageConstant;
            return fontHeight;
        }
        public int getSpaceBeforePoints()
        {
            return getSpacingInPoints(spaceBefore, 0);
        }
        public int getSpaceBeforePoints(int height)
        {
            return getSpacingInPoints(spaceBefore, height);
        }

        public int getSpaceAfterPoints()
        {
            return getSpacingInPoints(spaceAfter, 0);
        }
        public int getSpaceAfterPoints(int height)
        {
            return getSpacingInPoints(spaceAfter, height);
        }

        private int getSpacingInPoints(DocumentFormat.OpenXml.Drawing.TextSpacingType spacing, int height)
        {
            if (spacing == null)
                return 0;
            if (spacing.SpacingPoints != null)
                return spacing.SpacingPoints.Val / Globals.FontPoint;
            if (spacing.SpacingPercent.Val != null && height != 0)
                return spacing.SpacingPercent.Val * height / Globals.PercentageConstant;
            return 0;
        }

        public void SetParagraphProperties(Paragraph paragraph, SlidePart slidePart,
                        DocumentFormat.OpenXml.Drawing.ListStyle shapeListStyleMaster,
                        DocumentFormat.OpenXml.Drawing.ListStyle shapeListStyleLayout)
        {

            TextListStyleType listStyleType = this.slide.defaultTextStyle;
            if (slide.textStyles != null)
            {
                if (placeholder != null)
                    if (placeholder.Type.Value.Equals(PlaceholderValues.Body)
                        || placeholder.Type.Value.Equals(PlaceholderValues.SubTitle))
                    {
                        listStyleType = slide.textStyles.BodyStyle;
                    }
                    else if (placeholder.Type.Value.Equals(PlaceholderValues.Title)
                            || placeholder.Type.Value.Equals(PlaceholderValues.CenteredTitle))
                    {
                        listStyleType = slide.textStyles.TitleStyle;
                    }
                    else
                        listStyleType = slide.textStyles.OtherStyle;
                //Check what should we add here for all placeholder values. 
                //Should we take it by placeholder value or there is another property?
            }
            TextParagraphPropertiesType baseProperties = getParagraphPropFromTextListStyle(listStyleType, Level);
            TextParagraphPropertiesType basePropertiesMaster = getParagraphPropFromTextListStyle(shapeListStyleMaster, Level);
            TextParagraphPropertiesType basePropertiesLayout = getParagraphPropFromTextListStyle(shapeListStyleLayout, Level);

            defaultRunProperties = new PPTRunProperties(slide);


            if (baseProperties != null)
            {
                this.FillParagraphProperties(baseProperties, slidePart);
            }
            if (basePropertiesMaster != null)
            {
                this.FillParagraphProperties(basePropertiesMaster, slidePart);
            }
            if (basePropertiesLayout != null)
            {
                this.FillParagraphProperties(basePropertiesLayout, slidePart);
            }
            if (paragraph.ParagraphProperties != null)
            {
                this.FillParagraphProperties(paragraph.ParagraphProperties, slidePart);
            }
        }

        private TextParagraphPropertiesType getParagraphPropFromTextListStyle(OpenXmlCompositeElement listStyleType, int level)
        {
            if (listStyleType != null)
            {
                if (listStyleType is TextListStyleType)
                {
                    TextListStyleType parPropType = (TextListStyleType)listStyleType;
                    switch (level)
                    {
                        case 0: return parPropType.Level1ParagraphProperties;
                        case 1: return parPropType.Level2ParagraphProperties;
                        case 2: return parPropType.Level3ParagraphProperties;
                        case 3: return parPropType.Level4ParagraphProperties;
                        case 4: return parPropType.Level5ParagraphProperties;
                        case 5: return parPropType.Level6ParagraphProperties;
                        case 6: return parPropType.Level7ParagraphProperties;
                        case 7: return parPropType.Level8ParagraphProperties;
                        case 8: return parPropType.Level9ParagraphProperties;
                        default: return parPropType.Level1ParagraphProperties;
                    }
                }
                else if (listStyleType is ListStyle)
                {
                    ListStyle parPropType = (ListStyle)listStyleType;
                    switch (level)
                    {
                        case 0: return parPropType.Level1ParagraphProperties;
                        case 1: return parPropType.Level2ParagraphProperties;
                        case 2: return parPropType.Level3ParagraphProperties;
                        case 3: return parPropType.Level4ParagraphProperties;
                        case 4: return parPropType.Level5ParagraphProperties;
                        case 5: return parPropType.Level6ParagraphProperties;
                        case 6: return parPropType.Level7ParagraphProperties;
                        case 7: return parPropType.Level8ParagraphProperties;
                        case 8: return parPropType.Level9ParagraphProperties;
                        default: return parPropType.Level1ParagraphProperties;
                    }
                }
            }
            return null;
        }


        private void FillParagraphProperties(TextParagraphPropertiesType baseProperties, SlidePart slidePart)
        {
            if (baseProperties.LineSpacing != null)
            {
                lineSpacing = baseProperties.LineSpacing;
            }
            if (baseProperties.SpaceAfter != null)
            {
                spaceAfter = baseProperties.SpaceAfter;
            }
            if (baseProperties.SpaceBefore != null)
            {
                spaceBefore = baseProperties.SpaceBefore;
            }
            if (baseProperties.Alignment != null)
            {
                Align = baseProperties.Alignment.Value.ToString();
            }
            if (baseProperties.FontAlignment != null)
            {
                FontAlign = baseProperties.FontAlignment.Value.ToString();
            }

            if (baseProperties.LeftMargin != null)
            {
                marginLeft = baseProperties.LeftMargin.Value / Globals.LEAST_COMMON_MULTIPLE_100_254;
            }
            if (baseProperties.RightMargin != null)
            {
                marginRight = baseProperties.RightMargin.Value / Globals.LEAST_COMMON_MULTIPLE_100_254;
            }

            if (baseProperties.Indent != null)
            {
                Indent = baseProperties.Indent.Value / Globals.LEAST_COMMON_MULTIPLE_100_254;
            }

            defaultRunProperties.ReadDefaultRunProperties(baseProperties);
            this.ReadBullets(baseProperties, slidePart);

            if (baseProperties.GetFirstChild<NoBullet>() != null)
            {
                bullet = null;
            }

        }

        private void ReadBullets(TextParagraphPropertiesType baseProperties, SlidePart slidePart)
        {
            var bulletProp = new PPTRunProperties(slide);
            bulletProp.isBullet = true;

            if (baseProperties != null)
            {
                if (baseProperties.GetFirstChild<CharacterBullet>() != null)
                {
                    this.ReadCharacterBullets(baseProperties, bulletProp);
                }
                else if (baseProperties.GetFirstChild<PictureBullet>() != null)
                {
                    this.ReadPictureBullets(baseProperties, bulletProp, slidePart);
                }
            }
        }

        private void ReadPictureBullets(TextParagraphPropertiesType baseProperties, PPTRunProperties bulletProp, SlidePart slidePart)
        {
            this.SetBulletProperties(baseProperties, bulletProp);
            var picBul = baseProperties.GetFirstChild<PictureBullet>();
            if (picBul != null)
            {
                string embed = picBul.Blip.Embed.Value;

                string projectDir = System.IO.Path.GetDirectoryName(
                                    System.IO.Path.GetDirectoryName(Environment.CurrentDirectory));
                string storageDir = System.IO.Path.Combine(projectDir, Globals.STORAGE_DIR);
                string path = "";
                if (slide.slideIndex >= 1)
                {
                    path = slide.fileName+"_"+ slide.slideIndex;
                }
                else
                {
                    path = slide.fileName;
                }
                string pictureBulletDir = System.IO.Path.Combine(storageDir, path);
                bulletProp.Text = path + "\\" + embed + ".png";
                try
                {
                    bulletProp.bulletSize = this.ExtractPictureBulletImage(bulletProp, embed, pictureBulletDir, slidePart);
                }
                catch (IOException iex)
                {
                    Console.WriteLine(iex.Message);
                }
            }
        }

        private void ReadCharacterBullets(TextParagraphPropertiesType baseProperties, PPTRunProperties bulletProp)
        {
            bulletProp.Text = "" + baseProperties.GetFirstChild<CharacterBullet>().Char;
            this.SetBulletProperties(baseProperties, bulletProp);
        }

        private void SetBulletProperties(TextParagraphPropertiesType baseProperties, PPTRunProperties bulletProp)
        {
            this.ReadBulletFont(baseProperties, bulletProp);
            this.ReadBulletColor(baseProperties, bulletProp);
            this.ReadBulletSizePercentage(baseProperties, bulletProp);
            bulletProp.Left = marginLeft;
            bullet = bulletProp;

        }

        private void ReadBulletColor(TextParagraphPropertiesType baseProperties, PPTRunProperties bulletProp)
        {
            BulletColor buCol = baseProperties.GetFirstChild<BulletColor>();
            if (buCol != null)
            {
                if (buCol.RgbColorModelHex != null)
                {
                    bulletProp.FontColor = "#" + buCol.RgbColorModelHex.Val.Value;
                }
                else
                {
                    if (buCol.GetFirstChild<SchemeColor>() != null)
                    {
                        bulletProp.ReadThemeSchemeColor(buCol.GetFirstChild<SchemeColor>());
                    }
                }
            }
        }

        private void ReadBulletFont(TextParagraphPropertiesType baseProperties, PPTRunProperties bulletProp)
        {
            BulletFont font = baseProperties.GetFirstChild<BulletFont>();
            if (font != null)
            {
                if (font.Typeface != null)
                    bulletProp.FontFamily = font.Typeface;
                if (font.PitchFamily != null)
                {
                    bulletProp.FontSize = font.PitchFamily;
                }
                else
                {
                    var latinFonts = font.GetFirstChild<LatinFont>();
                    if (latinFonts != null)
                    {
                        bulletProp.ReadFontFamilyFromTheme(latinFonts);
                    }
                }
            }
            else
            {
                bulletProp.FontSize = defaultRunProperties.FontSize;
            }
        }

        private void ReadBulletSizePercentage(TextParagraphPropertiesType baseProperties, PPTRunProperties bulletProp)
        {
            if (baseProperties.GetFirstChild<BulletSizePercentage>() != null)
            {
                BulletSizePercentage pct = baseProperties.GetFirstChild<BulletSizePercentage>();
                if (bulletProp.bulletSize != 0)
                {
                    bulletProp.bulletSize = bulletProp.bulletSize * pct.Val / Globals.PercentageConstant;
                }
                else
                {
                    bulletProp.bulletSize = ClearSlideLibrary.HtmlController.HtmlText.DefaultBulletSize;
                    bulletProp.bulletSize = bulletProp.bulletSize * pct.Val / Globals.PercentageConstant;
                }
            }
        }

        private int ExtractPictureBulletImage(PPTRunProperties bulletProp, string embed,
                                              string realDir, SlidePart slidePart)
        {
            int imageSize = 0;
            try
            {
                OpenXmlPart masterPart = slide.SlideLayoutPart.SlideMasterPart.GetPartById(embed);
                if (masterPart != null)
                {
                    if (masterPart.ContentType.Equals("image/png"))
                    {
                        imageSize = CreateImage(bulletProp, embed, realDir, imageSize, masterPart);
                    }
                    else
                    {
                        OpenXmlPart sldPart = slidePart.GetPartById(embed);
                        if (sldPart != null)
                        {
                            if (sldPart.ContentType.Equals("image/png"))
                            {
                                imageSize = CreateImage(bulletProp, embed, realDir, imageSize, sldPart);
                            }
                        }
                    }
                }
            }
            catch (ArgumentOutOfRangeException aoex)
            {
                Console.WriteLine(aoex.Message);
            }
            catch (ArgumentException aex)
            {
                Console.WriteLine(aex.Message);
            }
            return imageSize;
        }

        private int CreateImage(PPTRunProperties bulletProp, string embed, string realDir, int imageSize, OpenXmlPart sldPart)
        {

            if (!System.IO.Directory.Exists(realDir))
                System.IO.Directory.CreateDirectory(realDir);

            Image image = Image.FromStream(sldPart.GetStream());
            Image scaledImage = Globals.ScaleByPercent(image, (int)bulletProp.FontSize);
            imageSize = scaledImage.Height;
            string imageName = System.IO.Path.Combine(realDir, embed + ".png");
            scaledImage.Save(imageName);
            return imageSize;
        }
    }
}
