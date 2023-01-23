<%@ Page Language="C#" MasterPageFile="theme.master"%><%@ MasterType VirtualPath="theme.master" %>
<asp:content id="PageHead" contentplaceholderid="Head" runat="Server">
</asp:content>
<asp:Content ID="PageBody" ContentPlaceHolderID="PageContent" Runat="Server">
    

    <!--slider-->

    <section id="slider" class="gap">
        <div class="container-fulid">
            <div class="row">
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-plugin-options="{autoplay:true,'autoplayTimeout': 3000}">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a href="<%=Ws.Param(this.Master.p, "theme:site_link_slider1", "") %>"><img src="<%=this.Master.p["theme:url"] %>/<%=Ws.Param(this.Master.p, "theme:site_slider1", "") %>" alt="<%=Ws.Param(this.Master.p, "theme:site_title_slider1", "") %>" class="d-block w-100" ></a>
                            </div>
                            <div class="carousel-item">
                                <a href="<%=Ws.Param(this.Master.p, "theme:site_link_slider2", "") %>"><img src="<%=this.Master.p["theme:url"] %>/<%=Ws.Param(this.Master.p, "theme:site_slider2", "") %>" alt="<%=Ws.Param(this.Master.p, "theme:site_title_slider2", "") %>" class="d-block w-100" ></a>
                            </div>
                            <div class="carousel-item">
                                <a href="<%=Ws.Param(this.Master.p, "theme:site_link_slider3", "") %>"><img src="<%=this.Master.p["theme:url"] %>/<%=Ws.Param(this.Master.p, "theme:site_slider3", "") %>" alt="<%=Ws.Param(this.Master.p, "theme:site_title_slider3", "") %>" class="d-block w-100" ></a>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--Group-food-list-->
    <section id="group-food-list" class="mb-5">
        <div class="container-fulid">
            <div class="row ">
            <div class="col-12">
                <div class=" style_box p-5 ">
                    <div class="col-12 "><h2 class=" text-5 font-weight-bold mb-5">برخی از خدمات حس تازگی</h2></div>
                    <div class="d-flex w-100 flex-wrap">
                        <div class="col-lg-2 col-sm-4 col-4 mb-4">
                            <div class="text-center">
                                <a href="/cooking" class="d-flex justify-content-center flex-column itemgroup">
                                    <div><img src="<%=this.Master.p["theme:url"] %>/assets/img/group6.png" width="50" alt="چی بپزم؟-حس تازگی" /></div>
                                    <span class="text-dark text-2 mt-2">چی بپزم؟</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-4 mb-4">
                            <div class="text-center">
                                <a href="/diseases" class="d-flex justify-content-center flex-column itemgroup">
                                    <div><img src="<%=this.Master.p["theme:url"] %>/assets/img/group1.png" width="50" alt="بیماری ها-حس تازگی" /></div>
                                    <span class="text-dark text-2 mt-2">بیماری ها</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-4 mb-4">
                            <div class="text-center">
                                <a href="/recipes?sw=رایگان" class="d-flex justify-content-center flex-column itemgroup">
                                    <div><img src="<%=this.Master.p["theme:url"] %>/assets/img/group2.png" width="50" alt="رایگان ها-حس تازگی" /></div>
                                    <span class="text-dark text-2 mt-2">رایگان ها</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-4 mb-4">
                            <div class="text-center">
                                <a href="/recipes/?sw=وجترین" class="d-flex justify-content-center flex-column itemgroup">
                                    <div><img src="<%=this.Master.p["theme:url"] %>/assets/img/group3.png" width="50" alt="وجترین-حس تازگی" /></div>
                                    <span class="text-dark text-2 mt-2">وجترین</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-4 mb-4">
                            <div class="text-center">
                                <a href="/recipes?page=1&temper_index=3" class="d-flex justify-content-center flex-column itemgroup">
                                    <div><img src="<%=this.Master.p["theme:url"] %>/assets/img/group4.png" width="50" alt="طبع ها-حس تازگی" /></div>
                                    <span class="text-dark text-2 mt-2">طبع ها</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-4 mb-4">
                            <div class="text-center">
                                <a href="/diets" class="d-flex justify-content-center flex-column itemgroup">
                                    <div><img src="<%=this.Master.p["theme:url"] %>/assets/img/group5.png" width="50" alt="رژیم ها-حس تازگی" /></div>
                                    <span class="text-dark text-2 mt-2">رژیم ها</span>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            </div>
        </div>
    </section>

    <!--categoryfood-->

    <section id="categoryfood" class="gap3">
        <div class="container-fulid">
            <div class="row">
                <div class="col-12">
                    <h2 class="mb-0 text-5 font-weight-bold">دسته بندی غذاها</h2>
                    <div class="owl-carousel owl-theme  show-nav-title mb-0" data-plugin-options="{'responsive': {'0': {'items': 2}, '479': {'items': 3}, '768': {'items': 4}, '979': {'items': 6}, '1199': {'items': 8}},'nav': true, 'margin': 10, 'loop': true,  'dots': false,'center': true,'autoplay': true, 'autoplayTimeout': 4000}">
                        
                        <%                                                   
                            this.Master.cmd.Parameters.Clear();
                            using (DataTable dt = Ws.Query(this.Master.cmd, new Dictionary<string, string>() {
     {"sql","select id,image1,caption,(select count(id) from tbl_food_recipes where active=1 and  ','+groups+',' like '%,'+cast(tbl_defines.id as nvarchar(50))+',%'  ) as cnt from tbl_defines where active=1 and comname='group_foods' order by orderno"}
})) {
                                foreach (DataRow row in dt.Rows) {
%>
                          <div class="item">
                            <a href="/recipes?groups=<%=row["id"]%>">
                                <div class="text-center"><img  alt="<%=row["caption"].ToString()%> -حس تازگی" class="img-fluid rounded" width="60" src="<%=row["image1"].ToString()%>"></div>
                               <h5 class="text-center font-weight-normal"><%=row["caption"].ToString()%></h5> 
                                <div class="text-center"><span class=" color-orange"> + <%=row["cnt"].ToString()%> غذا</span></div>
                            </a>
                        </div>
                    
                   <%} }%>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!--stylefood-->

    <section  class="gap2 stylefood">
        <div class="container-fulid">
            <div class="row">
                <div class="col-12">
                    <%
                        string MealName = ""; string MealID = "";
                        if (DateTime.Now.Hour > 4 && DateTime.Now.Hour < 10) { MealName = "صبحانه"; MealID = "287"; }
                        else if (DateTime.Now.Hour > 9 && DateTime.Now.Hour < 17) { MealName = "ناهار"; MealID = "288"; }
                        else { MealName = "شام"; MealID = "289"; }


                        %>
                    <h2 class="mb-0 text-5 font-weight-bold">غذاهای مناسب <%=MealName %>  </h2>
                    <div class="owl-carousel owl-theme mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 2}, '768': {'items': 3}, '979': {'items': 3}, '1199': {'items': 4}},'nav': true, 'margin': 10, 'loop': true,'center': true,'autoplay': true, 'autoplayTimeout': 4000,  'dots': false}">
                        <%this.Master.p.Add("_food_count_column", "1");
                            this.Master.p.Add("_food_filter", " and ','+meals+',' like '%," + MealID + ",%'");

                            Response.Write(Ws.GetBlock("blocks/parts/foods.ascx", this.Master.p, this.Master.cmd, ""));%>   
                    </div>

                </div>
            </div>
        </div>
    </section>

     <!--podcast-->

    <section id="podcast" class="mb-5">
        <div class="container-fulid">
            <div class="row">

                <div class="col-12">
                    <div class="d-flex style_box flex-wrap pb-4">
                        <div class="col-12 mt-4 "><h2 class=" text-5 font-weight-bold mb-4">پادکست های آشپزی</h2></div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="scroll_box mb-2">
                                <div class="tabs tabs-vertical tabs-right tabs-navigation tabs-navigation-simple ">
                                    <ul class="nav nav-tabs col-sm-3 ">

                                        <%
                                            this.Master.cmd.Parameters.Clear();
                                            using (DataTable dt = Ws.Query(this.Master.cmd,new Dictionary<string, string>() {
                                            {"fields","id,title1,image1,shorttext,author,groups,'' as groupnames"},
                                            {"type","blog"},
                                            {"count","8"},
                                            {"category","1590"},
                                            {"resulttype","table"} 
                                        })){
                                                foreach(DataRow row in dt.Rows){
                                        %>

                                        <li class="nav-item ">
                                            <a class="nav-link" href="#podcast<%=row["id"] %>" data-toggle="tab">  <%=row["title1"] %> <span class="float-right"> </span></a>
                                        </li>
                                       
                                        <%}} %>
                                    </ul>

                                </div>
                            </div>
                           <%-- <div class="text-right"><a href="#" class="color-orange">  همه پادکست ها <i class="las la-arrow-circle-left"></i></a></div>--%>
                        </div>
                        <div class="col-lg-8 col-md-6 col-sm-12">



                            <%
                                            this.Master.cmd.Parameters.Clear();
                                            using (DataTable dt = Ws.Query(this.Master.cmd,new Dictionary<string, string>() {
                                            {"fields","id,title1,url,fulltext,image1,author,groups,'' as groupnames"},
                                            {"type","blog"},
                                            {"count","8"},
                                            {"category","1590"},
                                            {"resulttype","table"} 
                                        })){
                                                foreach(DataRow row in dt.Rows){
                                        %>
                            <div class="tab-pane tab-pane-navigation " id="podcast<%=row["id"] %>">

                                <div id="audiowrap">
                                    <div id="audio0">
                                        <audio  id="audio<%=row["id"] %>" controls="controls"><source src="<%=row["url"] %>" type="audio/mpeg"></audio>
                                    </div>
                                    <div class="info mt-4">
                                       <%-- <h5 class="text-dark">     <span class="float-right"><i class="lar la-heart"></i> <i class="las la-share"></i></span></h5>
                                        <div class="font-weight-bold mb-3"> <i class="las la-user"></i> گوینده:  <span class="text-dark"><%=row["author"] %></span></div>--%>
                                        <div class="desc scroll_box"><p><%=row["fulltext"] %></p></div>
                                        <%--<span class="color-orange cursor text-1 show_text"> ادامه مطلب <i class="las la-angle-down text-1"></i></span>--%>
                                        <div class="tag mt-3">    </div>
                                    </div>
                                </div>
                            </div>
                            <%}} %>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


 <!--subscription-box-->

<% if (string.IsNullOrEmpty(this.Master.p["userplan:type"]))
                                {%>

 <section id="subscription-box" class="pt-5 mb-5">
    <div class="container-fulid">
        <div class="row">

            <div class="col-12">
                <div class="style_box">
                    <div class="d-flex  flex-wrap box_info">
                   
                        <div class="col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                           <span class="text-light  d-block  text-3 my-3">بیش از 1000 دستور پخت متفاوت،بدون محدودیت</span>
                           <span class="text-light d-block   text-3">با خرید <span class="text-light font-weight-bold text-4">اشتراک</span></span>
                           <div class="text-right my-4"><a href="/membership" class="btn_site btn_white py-2 px-5">خرید اشتراک</a></div>
                        </div>
                        <div class="col-lg-8 col-md-6 col-sm-12 pr-0 d-none d-md-block">
                          <img src="<%=this.Master.p["theme:url"] %>/assets/img/subscription-box.png" class="w-100">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
 <%} %>

     <!--stylefood-->

    <section  class="mb-5 stylefood pt-4">
        <div class="container-fulid">
            <div class="row">
                <div class="col-12">
                    <h2 class=" text-5 font-weight-bold mb-0">غذاهای رژیمی</h2>
                    <div class="owl-carousel owl-theme " data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 2}, '768': {'items': 3}, '979': {'items': 3}, '1199': {'items': 4}},'nav': true, 'margin': 10, 'loop': true,'center': true, 'autoplay': true, 'autoplayTimeout': 4000,  'dots': false}">
                        <%this.Master.p["_food_count_column"] = "1";
                            Response.Write(Ws.GetBlock("blocks/parts/foods.ascx", this.Master.p, this.Master.cmd, ""));%>   
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!--cooke-->

    <section id="cooke" class="mb-5">
        <div class="container-fulid">
            <div class="row">

                <div class="col-12 ">
                    <div class="style_box  py-4 box_cooke">
                        <div class="col-12 my-4 ">
                            
                            <div class="col-xl-8 col-lg-8 col-md-12 col-12">
                            <h3 class="mb-1  text-5 font-weight-bold">آشپزی با هر چه تو خونه دارید</h3><p class="text-1 mb-3">از بین مواد زیر مواردی که تو خونه دارید رو انتخاب کنید ما بهترین غذاهایی که میتونین با این موارد درست کنید رو بهتون معرفی می کنیم. </p>
                        <form id="recipe_items_form"   >
                            <div class="tabs tab_style1">

                                <ul class="nav nav-tabs">
                                    <div class="owl-carousel owl-theme stage-margin nav-style-1 mb-0" data-plugin-options="{'responsive': {'0': {'items': 2}, '479': {'items': 3}, '768': {'items':4}, '979': {'items': 4}, '1199': {'items': 4}}, 'margin':0, 'loop': false, 'nav': true, 'dots': false, 'stagePadding': 0}">
								 <%     
                                                       List<string> group_ids = new List<string>();
                                                       this.Master.cmd.Parameters.Clear();
                                                       using (DataTable dt = Ws.Query(this.Master.cmd, new Dictionary<string, string>() {
     {"sql","select top 20 id,caption from tbl_defines where active=1 and comname='group_items'  and id in ("+Ws.Param(this.Master.p, "theme:site_cooking_groups","0") +") and parent=0 order by orderno"}
}))
                                                       {
                                                           foreach (DataRow row in dt.Rows)
                                                           {
                                                               group_ids.Add(row["id"].ToString());
%>
                                    <div><li class="nav-item  ">
                                        <a class="nav-link text-center" href="#group<%=row["id"] %>" data-toggle="tab"><%=row["caption"] %></a>
                                    </li></div>
                                 
                                    <%} } %>
							</div>

                                                  

                                </ul>
                                <div class="tab-content ">
                                    

                                    
                                    <%
                                        this.Master.p.Add("_tabs_group", "");
                                        this.Master.p.Add("_partquery", " and id in ( select ingredient_id from tbl_food_items group by ingredient_id) ");

                                        foreach (string id in group_ids) { %>
                                    <div id="group<%=id%>" class="tab-pane">
                                        <div class="scroll_box">
                                        <div class="btn-group-toggle style5 <%--scroll_box--%>" data-toggle="buttons">
                                             <% this.Master.p["_tabs_group"]=id;
                                                  Response.Write(Ws.GetBlock("blocks/parts/tabs.ascx", this.Master.p, this.Master.cmd, ""));%>   

                                       </div>
                                       </div>
                                    </div>
                                 <%}

%>
                                 </div> 
                            </div>
                            <div class="text-right"><button type="button" onclick="homepage_ingredient_widget('search');" class="btn_site btn_gray_dark py-2 px-5">  انتخاب کنید <%--<i class="las la-angle-double-left"></i>--%></button></div>
                        </form>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
       </div>
    </section>

       <!--stylefood-->

    <section  class="mb-5 stylefood pt-4">
        <div class="container-fulid">
            <div class="row">

                <%if (!string.IsNullOrEmpty(this.Master.p["user:fav_groups"])) {  %>
                <div class="col-12">
                    <h2 class=" text-5 font-weight-bold mb-0">   ویژگی ها و علاقه ها     </h2>
                    <div class="owl-carousel owl-theme " data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 2}, '768': {'items': 3}, '979': {'items': 3}, '1199': {'items': 4}},'nav': true, 'margin': 10, 'loop': true,'center': true, 'autoplay': true, 'autoplayTimeout': 4000,  'dots': false}">
   <%
       this.Master.p["_food_filter"] = "";
       foreach (string groupid in this.Master.p["user:fav_groups"].Split(','))
       {
           if (string.IsNullOrEmpty(groupid)) continue;
      
           this.Master.p["_food_filter"] += " ( (','+groups+',') like '%,"+groupid+",%'  ) or ";

       }
       this.Master.p["_food_filter"] = " and ( " + this.Master.p["_food_filter"] +" 1=2)";
        /// make array of OR condiditions of favorite groups
%>
                        <%=(Ws.GetBlock("blocks/parts/foods.ascx", this.Master.p, this.Master.cmd, ""))%>   
                    </div>

                </div>
                <%}else {%>
                 <div class="col-12">
                    <h2 class=" text-5 font-weight-bold mb-0">     کیک و دسر           </h2>
                    <div class="owl-carousel owl-theme " data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 2}, '768': {'items': 3}, '979': {'items': 3}, '1199': {'items': 4}},'nav': true, 'margin': 10, 'loop': true,'center': true, 'autoplay': true, 'autoplayTimeout': 4000,  'dots': false}">
   <%
                
                   this.Master.p["_food_filter"]=" and( (','+groups+',') like '%,79,%' or (','+groups+',') like '%,80,%'  )";
%>
                        <%=(Ws.GetBlock("blocks/parts/foods.ascx", this.Master.p, this.Master.cmd, ""))%>   
                    </div>

                </div>


                <%} %>
            </div>
        </div>
    </section>

       <!--stylefood-->

    <section  class="mb-5 stylefood">
        <div class="container-fulid">
            <div class="row">
                <div class="col-12">
                    <h2 class=" text-5 font-weight-bold mb-0">پیشنهاد فصل</h2>

                    <%
                        string season = "";
 
                        if(Convert.ToInt32(WsDateTime.ShowDate(DateTime.Now.Date, "mm"))<=3)
                        {
                            season = "413";
                        }
                        else if(Convert.ToInt32(WsDateTime.ShowDate(DateTime.Now.Date, "mm"))<=6)
                        {
                            season = "414";

                        }
                        else if(Convert.ToInt32(WsDateTime.ShowDate(DateTime.Now.Date, "mm"))<=9)
                        {
                            season = "415";

                        }
                        else if(Convert.ToInt32(WsDateTime.ShowDate(DateTime.Now.Date, "mm"))<=12)
                        {
                            season = "416";

                        }
            this.Master.p["_food_filter"]= " and (','+food_season+',') like '%,"+season+",%' ";
                        %>
                    <div class="owl-carousel owl-theme " data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 2}, '768': {'items': 3}, '979': {'items': 3}, '1199': {'items': 4}},'nav': true, 'margin': 10, 'loop': true,'center': true,'autoplay': true, 'autoplayTimeout': 4000,   'dots': false}">
     <%=(Ws.GetBlock("blocks/parts/foods.ascx", this.Master.p, this.Master.cmd, ""))%>   
                    </div>

                </div>
            </div>
        </div>
    </section>

         <!--assessment-->

    <section id="assessment" class="mb-5">
        <div class="container-fulid">
            <div class="row">
                <div class=" col-12">
                    <div class="col-12"><h4>ارزیابی ها </h4></div>
                    <div class="style_box w-100 d-flex flex-wrap p-0">
                       
                        <div class="col-lg-2 col-md-3 col-sm-4 col-12 p-0">
                            <div class="tabs tabs-vertical tabs-left tabs-navigation">
                                <ul class="nav nav-tabs col-sm-3">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#assessment1" data-toggle="tab"><div class="mb-4"><img src="<%=this.Master.p["theme:url"] %>/assets/img/icon11.svg" width="35" alt="شاخص توده ای بدن-حس تازگی" /></div> شاخص توده ای بدن</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#callery_meter_section" data-toggle="tab"><div class="mb-4"><img src="<%=this.Master.p["theme:url"] %>/assets/img/icon2.svg" width="35" alt="حس تازگی- کالری مورد نیاز شما" /></div> کالری مورد نیاز شما</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#fat_meter_section" data-toggle="tab"><div class="mb-4"><img src="<%=this.Master.p["theme:url"] %>/assets/img/icon3.svg" width="35" alt="میزان چربی بدن شما-حس تازگی" /></div> میزان چربی بدن شما</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-10 col-md-9 col-sm-8 col-12">
                            <div class="tab-pane tab-pane-navigation active h-100" id="assessment1">
                                <div class="d-flex flex-wrap h-100">
                                    <div class="col-md-12 col-lg-4 py-3">
                                        <h3 class=" text-4 mb-3 font-weight-bold">محاسبه شاخص توده بدنی (BMI)</h3>
                                        <p>جهت مشخص شدن وضعیت سلامت و نسبت چربی بدن خود باید موارد رو به رو را تکمیل نمائید</p>
                                        <div class="btn-group-toggle btn_group_gender d-flex mt-5" data-toggle="buttons">
                                            <label class="btn active mb-2 text-3 px-5">
                                                <!--checked-->
                                                <input type="radio" name="gender_bmi" value="2" id="option1" />خانم
                                            </label>
                                            <label class="btn  mb-2  text-3 px-5">
                                                <input type="radio" name="gender_bmi" value="1" id="option2"  />
                                                آقا
                                            </label>

                                        </div>
                                        <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">وزن (kg)
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span id="plusweight" class="plusnumber"><i class="las la-plus"></i></span>
                                                <input  id="inputweight" class="inputnumber" name="weight" value="50" />
                                                <span id="minusweight" class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>
                                        </div>
                                        <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">قد (cm)
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span id="plusheight" class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="height" id="inputheight" class="inputnumber" value="100" />
                                                <span id="minusheight" class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-lg-4 pt-3 back_progress">
                                        <div class="d-flex flex-column justify-content-center h-100">
                                            <h3 class=" text-4 mb-3 font-weight-bold">عدد شاخص توده بدنی</h3>
                                            <div><span class="text-5 font-weight-bold" id="bmi_value">24.9</span> <span class="float-right btn_site btn_green <!--btn_orange--> <!--btn_red--> py-1 px-3" id="bmi_value_text"> وزن ایده آل    </span></div>
                                            <div class="progress mb-2 mt-5 ">
                                                <div id="bmivalue" class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="15" aria-valuemax="40" style="transform: translateX(50px);">
                                                </div>
                                                <span class="min_progress">15</span><span class="max_progress">40</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4 pt-3">
                                        <div class="d-flex flex-column justify-content-center h-100 pb-4">
                                            <p class="font-weight-bold mb-4">ما برای وضعیت سلامت شما پیشنهادات ویژه ای داریم:</p>
                                            <div class="d-flex flex-wrap">
                                                <a href="/recipes?sw=پرکالری" class="lowbmi averagebmi bcr_light btn_site py-1 px-3 mr-sm-2 mb-2 text-2">غذاهای پرکالری</a>
                                                <a href="/recipes?sw=کم_کالری" class="highbmi bcr_light btn_site py-1 text-2 px-3 mr-sm-2 mb-2">غذاهای کم کالری    </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="tab-pane tab-pane-navigation" id="callery_meter_section">
                                <h3 class=" text-4 mb-3 font-weight-bold">کالری مورد نیاز شما</h3>

                                    <p>جهت مشخص شدن وضعیت سلامت و   کالری مورد نیاز       موارد رو به رو را تکمیل نمائید</p>
                                         <div class="btn-group-toggle btn_group_gender d-flex mt-5" data-toggle="buttons">
                                            <label class="btn active mb-2 text-3 px-5">
                                                <!--checked-->
 
                                                <input type="radio" name="gender_cal" value="2" autocomplete="off"  >خانم
                                            </label>
                                            <label class="btn  mb-2  text-3 px-5">
                                                <input type="radio" name="gender_cal" value="1" autocomplete="off">
                                                آقا
                                            </label>

                                        </div>
                                        <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">وزن (kg)
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span  class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="weight"   class="inputnumber" value="50" />
                                                <span  class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>

                                        </div>
                                   <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">قد (cm)
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span   class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="height"   class="inputnumber" value="100" />
                                                <span   class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>
                                        </div>

                                     <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">سن (سال) 
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span   class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="age"   class="inputnumber" value="50" />
                                                <span   class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>
                                        </div>

                                  <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2"> میزان فعالیت
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                               <select name="activity_suf">
                                                   <option value="1.2">بدون تحرک ( زندگی روزمره بدون ورزش )</option>
                                                   <option value="1.375">ورزش سبک(1 الی 3 بار ورزش در هفته)</option>
                                                   <option value="1.55">ورزش متوسط (3 الی 5 بار ورزش در هفته) </option>
                                                   <option value="1.725">ورزش سنگین (6 الی 7 بار ورزش در هفته ) </option>
                                                   <option value="1.9">ورزش خیلی سنگین( ورزش هرروز با شدت زیاد)</option>
                                               </select>
                                                </div>
                                        </div>


                                <div class="callery_result"></div>

                            </div>
                             <div class="tab-pane tab-pane-navigation" id="fat_meter_section">
                                <h3 class=" text-4 mb-3 font-weight-bold">محاسبه چربی بدن</h3>

                                    <p>جهت مشخص شدن وضعیت سلامت و   کالری مورد نیاز       موارد رو به رو را تکمیل نمائید</p>
                                         <div class="btn-group-toggle btn_group_gender d-flex mt-5" data-toggle="buttons">
                                            <label class="btn active mb-2 text-3 px-5">
                                                <!--checked-->
                                                <input type="radio" name="gender_fat" value="2" autocomplete="off"  >خانم
                                            </label>
                                            <label class="btn  mb-2  text-3 px-5">
                                                <input type="radio" name="gender_fat" value="1" autocomplete="off">
                                                آقا
                                            </label>

                                        </div>
                                        <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">وزن (kg)
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span  class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="weight"   class="inputnumber" value="50" />
                                                <span  class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>

                                        </div>
                                   <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">قد (cm)
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span   class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="height"   class="inputnumber" value="100" />
                                                <span   class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>
                                        </div>

                                     <div class="mt-4 box_number">
                                            <span class="font-weight-bold text-2 text-light mr-2">سن (سال) 
                                                <!--<i class="las la-hand-point-left scroll_left"></i>-->
                                            </span>
                                            <div class="input_box_number">
                                                <span   class="plusnumber"><i class="las la-plus"></i></span>
                                                <input name="age"   class="inputnumber" value="50" />
                                                <span   class="minusnumber" data-min="50"><i class="las la-minus"></i></span>
                                            </div>
                                        </div>

                             


                                <div class="fat_result"></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



        <!--blogs-->

                <section id="blogs" class="pt-4">
                    <div class="container-fulid">
                        <div class="row">
                            
                            <div class="col-12"><h2 class=" text-5 font-weight-bold">مجله حس تازگی </h2></div>
                            <%
                                                   this.Master.p.Add("_blog_count_item", "3");
                                                   this.Master.p.Add("_blog_group", "1591");

    Response.Write(Ws.GetBlock("blocks/parts/blog.ascx", this.Master.p, this.Master.cmd, ""));%>   

                        </div>
                    </div>
                </section>
        
        

<script>
    /*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	8.0.0
*/

    console.clear();

    // Core
    function initCarousel(options) {
        function CustomCarousel(options) {
            this.init(options);
            this.addListeners();
            return this;
        }

        CustomCarousel.prototype.init = function (options) {
            this.node = options.node;
            this.node.slider = this;
            this.slides = this.node.querySelector('.slides').children;
            this.slidesN = this.slides.length;
            this.pagination = this.node.querySelector('.pagination');
            this.pagTransf = 'translate( -50%, -50% )';
            this.dots = this.pagination.children;
            this.dotsN = this.dots.length;
            this.step = -360 / this.dotsN;
            this.angle = 0;
            this.next = this.node.querySelector('.next');
            this.prev = this.node.querySelector('.prev');
            this.activeN = options.activeN || 0;
            this.prevN = this.activeN;
            this.speed = options.speed || 300;
            this.autoplay = options.autoplay || false;
            this.autoplayId = null;

            this.setSlide(this.activeN);
            this.arrangeDots();
            this.pagination.style.transitionDuration = this.speed + 'ms';
            if (this.autoplay) this.startAutoplay();
        }

        CustomCarousel.prototype.addListeners = function () {
            var slider = this;

            if (this.next) {
                this.next.addEventListener('click', function () {
                    slider.setSlide(slider.activeN + 1);
                });
            }

            if (this.prev) {
                this.prev.addEventListener('click', function () {
                    slider.setSlide(slider.activeN - 1);
                });
            }

            for (var i = 0; i < this.dots.length; i++) {
                this.dots[i].addEventListener('click', function (i) {
                    return function () { slider.setSlide(i); }
                }(i));
            }

            if (this.autoplay) {
                this.node.addEventListener('mouseenter', function () {
                    slider.stopAutoplay();
                });

                this.node.addEventListener('mouseleave', function () {
                    slider.startAutoplay();
                });
            }
        };

        CustomCarousel.prototype.setSlide = function (slideN) {
            this.slides[this.activeN].classList.remove('active');
            if (this.dots[this.activeN]) this.dots[this.activeN].classList.remove('active');

            this.prevN = this.activeN;
            this.activeN = slideN;
            if (this.activeN < 0) this.activeN = this.slidesN - 1;
            else if (this.activeN >= this.slidesN) this.activeN = 0;

            this.slides[this.activeN].classList.toggle('active');
            if (this.dots[this.activeN]) this.dots[this.activeN].classList.toggle('active');

            this.rotate();
        };

        CustomCarousel.prototype.rotate = function () {
            if (this.activeN < this.dotsN) {
                this.angle += function (dots, next, prev, step) {
                    var inc, half = dots / 2;
                    if (prev > dots) prev = dots - 1;
                    if (Math.abs(inc = next - prev) <= half) return step * inc;
                    if (Math.abs(inc = next - prev + dots) <= half) return step * inc;
                    if (Math.abs(inc = next - prev - dots) <= half) return step * inc;
                }(this.dotsN, this.activeN, this.prevN, this.step)

                this.pagination.style.transform = this.pagTransf + 'rotate(' + this.angle + 'deg)';
            }
        };

        CustomCarousel.prototype.startAutoplay = function () {
            var slider = this;

            this.autoplayId = setInterval(function () {
                slider.setSlide(slider.activeN + 1);
            }, this.autoplay);
        };

        CustomCarousel.prototype.stopAutoplay = function () {
            clearInterval(this.autoplayId);
        };

        CustomCarousel.prototype.arrangeDots = function () {
            for (var i = 0; i < this.dotsN; i++) {
                this.dots[i].style.transform = 'rotate(' + 360 / this.dotsN * i + 'deg)';
            }
        };

        return new CustomCarousel(options);
    }


    // Init
    var plugins = {
        customCarousel: document.querySelectorAll('.circle-carousel')
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (plugins.customCarousel.length) {
            for (var i = 0; i < plugins.customCarousel.length; i++) {
                var carousel = initCarousel({
                    node: plugins.customCarousel[i],
                    speed: plugins.customCarousel[i].getAttribute('data-speed'),
                    autoplay: plugins.customCarousel[i].getAttribute('data-autoplay')
                });
            }
        }
    });


    

    $('.highbmi,.lowbmi,.averagebmi').hide();
    $('#inputweight,#inputheight,[name="gender_bmi"]').change(function () {
        $('.highbmi,.lowbmi,.averagebmi').hide();

        var w = parseInt($('#inputweight').val());
        var h = $('#inputheight').val() / 100;
        var bmi = w / (h * h);
        var gender = $('[name="gender_bmi"]:checked').val();

        bmi = Math.round(bmi * 100) / 100;

        var left = bmi * 0.82 / 40; if (bmi > 40) left = 0.82;
        left = left * 100;
        $('#bmi_value').html(bmi);
        var bmi_text = '';
        if (bmi < 18.5) { bmi_text = 'شما کاهش وزن دارید.'; $('.lowbmi').show(); }
        else if (bmi < 25) { bmi_text = ' وزن شما درمحدوده طبیعی است.  '; $('.averagebmi').show(); }
        else if (bmi < 30) { bmi_text = 'شما افزایش وزن دارید.'; $('.highbmi').show(); }
        else if (bmi > 30) { bmi_text = 'شما اضافه وزن شدید دارید.'; $('.highbmi').show(); }


        $('.progress-bar-primary').css('left', left + '%');


        var ideal_weight = 0;
         var hc = h * 100;
        if (gender == "1") { ideal_weight = (hc - 102) ; }
        if (gender == "2") { ideal_weight = (hc - 105) / 0.9; }

        var diff_weight = ideal_weight - w;
        diff_weight = Math.round(diff_weight * 100) / 100;

        if (diff_weight > 0 && (bmi < 18.5 || bmi > 25)) { bmi_text += " کمبود وزن شما  " + diff_weight+" کیلوگرم "; }
        if (diff_weight < 0 && (bmi < 18.5 || bmi > 25)) { bmi_text += " اضافه وزن شما " + (diff_weight * -1) +" کیلوگرم"; }

        $('#bmi_value_text').html(bmi_text);

    });

    function init_callery_module() {
        $('#callery_meter_section input,#callery_meter_section select').on('change', function () {

            var result = $('.callery_result');
            var parent = $('#callery_meter_section');
            var w = parent.find('[name="weight"]').val();
            var h = parent.find('[name="height"]').val();
            var age = parent.find('[name="age"]').val();
            var gender = parent.find('[name="gender_cal"]:checked').val();
            var activity_suf = parent.find('[name="activity_suf"]').val();

            if (isEmpty(w) || isEmpty(h) || isEmpty(age) || isEmpty(activity_suf)) {
                return;
            }

            try {
                w = parseFloat(w);
                h = parseFloat(h);
                age = parseFloat(age);
                activity_suf = parseFloat(activity_suf);
            } catch {
                result.html("<span class='error'>لطفا موارد خواسته شده را به صورت صحیح وارد نمایید</span>"); return;
            }



            var callery = 0;
            if (gender == '1') {
                var a = (13.397 * w);
                var b = (4.799 * h);
                var c = (5.677 * age);
                callery = a + b -c + 88.362;
            }
            if (gender == '2') {
                var a = (9.247 * w);
                var b = (3.098 * h);
                var c = (4.330 * age);

                callery = a+b - c + 447.593;
            }
            callery = callery * activity_suf;

            callery= Math.round(callery * 100) / 100
 
            result.html("<span class='error'>مقدار کالری روزانه مورد نیاز شما " + callery + " است</span>");
        })
    }


    function init_fatmeter_module() {
        $('#fat_meter_section input,#fat_meter_section select').on('change', function () {

            var result = $('.fat_result');
            var parent = $('#fat_meter_section');
            var w = parent.find('[name="weight"]').val();
            var h = parent.find('[name="height"]').val();
            var age = parent.find('[name="age"]').val();
            var gender = parent.find('[name="gender_fat"]:checked').val();
 
            if (isEmpty(w) || isEmpty(h) || isEmpty(age)  ) {
                return;
            }
            var bmi = 0;
            try {
                w = parseFloat(w);
                h = parseFloat(h) / 100;;
                bmi = w / (h * h);

                age = parseFloat(age);
                
            } catch {
                result.html("<span class='error'>لطفا موارد خواسته شده را به صورت صحیح وارد نمایید</span>"); return;
            }

            var fat = 0;
            if (gender == '1'&&age>18) {
                fat = (1.20 * bmi) + (0.23 * age) - 16.2;
            }
            else if (gender == '1' && age <= 18) {
                fat = (1.51 * bmi) - (0.7 * age) - 2.2;

             }
            else if (gender == '2' && age > 18) {
                fat = (1.20 * bmi) + (0.23 * age) - 5.4;


             }
            else if (gender == '2' && age <= 18) {
                 fat = (1.51 * bmi) + (0.7 * age) +1.4;

             }
            fat = Math.round(fat * 100) / 100
            var fat_text = '';
            if (gender == 2) {
                if (fat < 14) { fat_text = ' شما کاهش چربی دارید  '; }
                else if (fat <= 21) { fat_text = ' درصد چربی شما در محدوده ورزشکاری است   '; }
                else if (fat <= 25) { fat_text = 'چربی بدن شما مناسب است '; }
                else if (fat <= 33) { fat_text = 'درصد چربی بدن شما نرمال است'; }
                else if (fat > 33) { fat_text = 'درصد چربی بدن شما بسیار بالاست'; }
            }
            if (gender == 1) {
                if (fat < 6) { fat_text = ' شما کاهش چربی دارید  '; }
                else if (fat <= 14) { fat_text = ' درصد چربی شما در محدوده ورزشکاری است   '; }
                else if (fat <= 18) { fat_text = 'چربی بدن شما مناسب است '; }
                else if (fat <= 26) { fat_text = 'درصد چربی بدن شما نرمال است'; }
                else if (fat > 25) { fat_text = 'درصد چربی بدن شما بسیار بالاست'; }
            }


            fat_text += "  . درصد چربی بدن شما  " + fat+" است  ";
            result.html("<span class='error'>" + fat_text+"</span>");
        })
    }

    init_callery_module();
    init_fatmeter_module();




    $('input[name="weight"]').on('change', function () {
        var h = $('input[name="height"]').val();
        var w = $('input[name="weight"]').val();
        if (isEmpty(h) || isEmpty(w)) return;

        $.ajax({
            url: '/?webservice=submit_user_height', data: { height: h, weight:w}, success: function (e) { console.log(e);}
        })

    });



 


</script>


    <div class="cookie-accepet_container" >
      <div class="row style_box  px-2 py-3">
          <div class="col-xl-7 col-lg-6 col-md-9 text-dark font-weight-bold">
              با ادامه بازدید از سایت با قوانین حفظ حریم خصوصی و نگهداری Cookie موافقت می کنم
          </div>
          <div class="col-xl-2 col-lg-2 col-md-3 text-left">
              <span class="cursor close_box_cookie">لغو</span>
              <button onclick="accept_cookie();" type="button" class="btn_site btn_orange py-1 px-5 ml-3">ادامه</button>
              
          </div>
      </div>
    </div>

</asp:content>