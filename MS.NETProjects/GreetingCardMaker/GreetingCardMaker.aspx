<%@ Page Language="C#"  AutoEventWireup="true" CodeBehind="GreetingCardMaker.aspx.cs" Inherits="GreetingCardMaker.GreetingCardMaker" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Greeting Card Maker</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Choose a background color:<br />
            <asp:DropDownList AutoPostBack="true" ID="lstBackColor" Width="194px" Height="22px" runat="Server" />
            <br />
            <br />
            Choose a font:<br />
            <asp:DropDownList ID="lstFontName"  runat="Server" Width="194px" Height="22px" />
            <br />
            <br />
           Choose a font size:<br />
           <!-- <asp:TextBox ID="txtFontSize" runat="Server" />-->
            <asp:DropDownList ID="textFontSize" runat="Server" Width="194px" Height="22px"/>
            <br />
            <br />
            Choose a border style:<br />
            <asp:RadioButtonList ID="lstBorder" runat="Server" Width="177px"
                Height="59px" />
            <br />
            <br />
            <asp:CheckBox ID="chkPicture" runat="Server" Text="Add the default picture"></asp:CheckBox><br />
            <br />
            Enter the greeting text below:<br />
            <asp:TextBox ID="txtGreeting"  runat="Server" Width="240px" Height="85px"
                TextMode="MultiLine" />
            <br />
            <br />
            <asp:Button ID="cmdUpdate" OnClick="cmdUpdate_Click"
                runat="Server" Width="71px" Height="24px" Text="Update" />
        </div>
        <asp:Panel ID="pnlCard" runat="Server" Width="339px" Height="481px" HorizontalAlign="Center"
            Style="position: absolute; top: 16px; left: 313px;">
            <br />
            &nbsp;
            <asp:Label ID="lblGreeting" runat="Server" Width="256px" Height="150px" />
            <br />
            <br />
            <br />
            <asp:Image ID="imgDefault" runat="Server" Width="212px" Height="160px" />
        </asp:Panel>
    </form>
</body>
</html>
