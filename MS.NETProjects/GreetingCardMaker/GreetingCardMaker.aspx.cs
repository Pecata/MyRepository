using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.Drawing.Text;
using System.ComponentModel;

namespace GreetingCardMaker
{
    public partial class GreetingCardMaker : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
            {
                string[] colorArray = Enum.GetNames(typeof(KnownColor));
                lstBackColor.DataSource = colorArray;
                lstBackColor.DataBind();

                /*lstBackColor.Items.Add("White");
                lstBackColor.Items.Add("Red");
                lstBackColor.Items.Add("Green");
                lstBackColor.Items.Add("Blue");
                lstBackColor.Items.Add("Yellow");
                */
                for (int i = 8; i <= 32; i += 2)
                {
                    textFontSize.Items.Add(i.ToString());

                }
                InstalledFontCollection fonts = new InstalledFontCollection();
                foreach (FontFamily family in fonts.Families)
                {
                    lstFontName.Items.Add(family.Name);
                }
                string[] borderStyleArray = Enum.GetNames(typeof(BorderStyle));
                lstBorder.DataSource = borderStyleArray;
                lstBorder.DataBind();
                /*
                //first border item.
                ListItem item = new ListItem();
                item.Text = BorderStyle.None.ToString();
                item.Value = ((int)BorderStyle.None).ToString();
                lstBorder.Items.Add(item);

                //second border item.
                item = new ListItem();
                item.Text = BorderStyle.Double.ToString();
                item.Value = ((int)BorderStyle.Double).ToString();
                lstBorder.Items.Add(item);

                //third border item.
                item = new ListItem();
                item.Text = BorderStyle.Solid.ToString();
                item.Value = ((int)BorderStyle.Solid).ToString();
                lstBorder.Items.Add(item);
                */
                lstBorder.SelectedIndex = 0;
                imgDefault.ImageUrl = "cake.png";
            }
        }

        protected void cmdUpdate_Click(object sender, EventArgs e)
        {
            pnlCard.BackColor = System.Drawing.Color.FromName(lstBackColor.SelectedItem.Text);
            lblGreeting.Font.Name = lstFontName.SelectedItem.Text;
            lblGreeting.Font.Size =
                FontUnit.Point(Int32.Parse(textFontSize.SelectedItem.Text));

            /* if (Int32.Parse(txtFontSize.Text) > 0)
             {
                 lblGreeting.Font.Size =
                     FontUnit.Point(Int32.Parse(txtFontSize.Text));
             }
             else 
             {
                 throw new FormatException("Please specify the font size.");
             }*/

            /*
            int borderValue = Int32.Parse(lstBorder.SelectedItem.Value);
            pnlCard.BorderStyle = (BorderStyle)borderValue;
            */
            TypeConverter converter =
                TypeDescriptor.GetConverter(typeof(BorderStyle));

            pnlCard.BorderStyle = (BorderStyle)converter.ConvertFromString(
                lstBorder.SelectedItem.Text);

            if (chkPicture.Checked)
            {
                imgDefault.Visible = true;
            }
            else
            {
                imgDefault.Visible = false;
            }
            lblGreeting.Text = txtGreeting.Text;
        }
    }
}