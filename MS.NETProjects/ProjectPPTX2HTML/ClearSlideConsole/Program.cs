﻿using System;
using System.IO;
using ClearSlideLibrary.HtmlController;
using ClearSlideLibrary.PPTBuilder;
using ClearSlideLibrary.Dom;
using System.Windows.Forms;
using System.ComponentModel;
using System.Drawing;

namespace ClearSlideConsole
{
    public class Program : System.Windows.Forms.Form
    {
        private TextBox textBox1;
        private Button button1;
        private OpenFileDialog openFileDialog1;

        public Program()
        {
            InitializeComponent();
        }

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Program());
        }

        private void InitializeComponent()
        {
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();

            this.openFileDialog1.FileName = "openFileDialog1";

            this.textBox1.Location = new System.Drawing.Point(24, 44);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(247, 20);
            this.textBox1.TabIndex = 0;

            this.button1.Location = new System.Drawing.Point(286, 41);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 1;
            this.button1.Text = "choose file";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.ChooseFile);

            this.ClientSize = new System.Drawing.Size(379, 127);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.textBox1);
            this.Name = "ClearSlide";
            this.Text = "ClearSlide";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private void ChooseFile(object sender, EventArgs e)
        {
            // Create an instance of the open file dialog box.
            OpenFileDialog openFileDialog1 = new OpenFileDialog();

            // Set filter options and filter index.
            openFileDialog1.Filter = " (.pptx)|*.pptx|All Files (*.*)|*.*";
            openFileDialog1.FilterIndex = 1;
            openFileDialog1.Multiselect = true;

            // Process input if the user clicked OK.
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                //Open the selected file to read.
                textBox1.Text = openFileDialog1.FileName;
                ProcessPresentation();
                Application.Exit();
            }
        }

        private void ProcessPresentation()
        {


            var inf = new FileInfo(textBox1.Text);
            string file = Path.GetFileName(textBox1.Text);
            string htmlFileName = Path.GetFileNameWithoutExtension(inf.Name);
            string dir = Path.GetDirectoryName(Path.GetDirectoryName(Environment.CurrentDirectory));
            string destinationDirForHtmlFile = Path.Combine(dir, "PictureExtracts");

            string path = textBox1.Text; //Path.Combine(dir, Path.GetFileName(file));


            //Generate slide html output file.
            var presentationBuilder = new PPTPresenationBuilder();
            var pptSlides = presentationBuilder.GetPPTSlides(path);
            int width = presentationBuilder.getSlideWidth();
            int height = presentationBuilder.getSlideHeight();


            int slideCounter = 1;
            foreach (PPTSlide pptSlide in pptSlides)
            {
                var htmlcontroller = new HtmlController(destinationDirForHtmlFile,
                                                        htmlFileName, pptSlide,
                                                        slideCounter, pptSlides.Count)
                                                        {
                                                            SlideWidth = width,
                                                            SlideHeight = height
                                                        };
                htmlcontroller.GenerateHtml();
                slideCounter++;
            }
            textBox1.Text = "DONE";
            Console.WriteLine(textBox1.Text);
        }
    }
}