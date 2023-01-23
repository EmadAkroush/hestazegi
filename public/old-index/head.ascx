<%@ Control Language="C#" ClassName="WsUserControl" Inherits="WebsanCore.WsUserControl" AutoEventWireup="true" %>
<link rel="alternate" hreflang="fa-IR" href="https://www.hesetazegi.com/"/>
<%if (Ws.Param(p, "theme:seo_robots", "1") == "1"){%>
<meta name="title" content="<%= Ws.Param(p, "theme:site_title", "") %>">
<meta name="description" content="<%=Ws.Param(p, "theme:seo_description", "") %>">
<meta name="keywords" content="<%=Ws.Param(p, "theme:seo_keywords", "").Replace(System.Environment.NewLine, ",")%>">
<meta name="language" content="<%= Ws.Param(p, "theme:seo_language", "Persian")%>">
<meta name="country" content="<%=Ws.Param(p, "theme:seo_country", "Iran")%>">
<meta name="author" content="حس تازگی">
<meta name="generator" content="WEBSAN, www.websansite.com">                   
<meta name="robots" content="index, follow, imageindex">
<%} else {%><meta name="robots" content="noindex, nofollow, noimageindex"><%} %>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="shortcut icon" type="image/x-icon" href="<%=p["theme:url"]%>/<%=Ws.Param(p, "theme:site_favicon", "assets/img/favicon.png")%>"/>
<link rel="apple-touch-icon" href="<%=p["theme:url"]%>/<%=Ws.Param(p, "theme:site_favicon", "assets/img/favicon.png")%>" />
<%--open graph data--%>
<meta property="og:title" content="recipes"/>
<meta property="og:site_name" content="<%= Ws.Param(p, "theme:site_title", "") %>" />
<meta property="og:url" content="https://www.hesetazegi.com/" />
<meta property="og:image" content="https://www.hesetazegi.com/themes/default/assets/img/logo.png" />
<meta property="og:type" content="restaurant"/>
<meta property="og:description" content="<%=Ws.Param(p, "theme:seo_description", "") %>"/>
