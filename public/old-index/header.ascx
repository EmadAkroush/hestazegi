<%@ Control Language="C#" ClassName="WsUserControl" Inherits="WebsanCore.WsUserControl" AutoEventWireup="true" %>


 <!--menu-->

    <aside>
        <div class="container-fulid">
            <div class="row">
                <div id="mobileNav">

                    <input type="checkbox" id="top-nav" />
                    <span class="hamburgerspan"></span>
                    <span class="hamburgerspan"></span>
                    <span class="hamburgerspan"></span>
                    <div id="menu-cont-1 h-100">
                        <div class="d-flex flex-column h-100">
                            <div class="header-logo mt-5">
                                <a href="/">
                                    <img alt="تصویر لوگوی سایت حس تازگی" width="85" src="<%=p["theme:url"] %>/<%=Ws.Param(p, "theme:site_logo", "/assets/img/logo.png") %>">
                                </a>
                            </div>
                            <ul class="menu-ul flex-grow-1 h-100">
                                <li class="nav-item"> <a href="/"><i class="las la-home"></i>   صفحه اصلی</a></li>
                                <li class="nav-item"> <a href="/recipes"><i class="las la-file-alt"></i> دستور پخت ها</a></li>
                                <li class="nav-item"> <a href="/calculators"><i class="las la-calculator"></i> ماشین حساب آشپزی</a></li>
                                <li class="nav-item sub-menu">
                                    <input type="checkbox" id="menu-1" />
                                    <a><i class="las la-info-circle "></i> دانش نامه آشپزی</a>
                                    <div id="menu-cont-2">
                                        <ul class="menu-ul mt-0">
                                            <label class="menu-label" for="menu-1">برگشت</label>
                                            <li class="nav-item"><a href="/raw-material">مواد اولیه</a></li>
                                            <li class="nav-item"><a href="/meals">وعده های غذایی</a></li>
                                            <li class="nav-item"><a href="/nutrients">مواد مغذی</a></li>

                                            <li class="nav-item"><a href="/equipments">تجهیزات آشپزخانه</a></li>
                                            <li class="nav-item"><a href="/diseases">دانشنامه بیماری</a></li>
                                            <li class="nav-item"><a href="/diets">دانشنامه رژیم ها</a></li>
                                            <li class="nav-item"><a href="/iran">فرهنگ غذایی ایران</a></li>
                                            <li class="nav-item"><a href="/nations">فرهنگ غذایی جهان</a></li>
                                            <li class="nav-item"><a href="/encyclopedia"> اصطلاحات آشپزی</a></li>

                                        </ul>
                                    </div>
                                </li>
                                 <li class="nav-item"> <a href="/league"><i class="las la-trophy"></i> لیگ حس تازگی</a></li>
                                <li class="nav-item"> <a href="/about"><i class="far fa-star "></i> درباره حس تازگی</a></li>

                            </ul>
                            <% if (string.IsNullOrEmpty(p["userplan:type"]))
                                {%>
                            <div class="header-row justify-content-end p-3 subscription d_sm_n">
                                <div class="img"></div>
                                <div class="boxtext text-center">
                                    <h5 class="text-dark mb-2">خرید اشتراک  </h5>
                                    <p class="text-dark text-1 mb-4 text-center">  شما می توانید هم اشتراک طلایی و هم اشتراک ویژه خریداری کنید  </p>
                                                   
                                     <a href="/membership" class="btn_site btn_orange px-5 py-2">خرید اشتراک  </a>
                                 
                                </div>
                            </div>
                            <div class="header-row justify-content-center  mb-5 p-3 subscription  d-none d_sm_s">
                               
                               <a href="/membership" class="btn_site btn_orange w-100 text-center px-5 py-2">خرید اشتراک  </a>
                            </div>
                            <%} %>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <!--header-->

    <header class="my-5 header gap">
        <div class="container-fulid">
            <div class="row">
                <div class="col-12">
                    <a href="/" class="logo_img d-none">
                        <img alt="تصویر لوگو حس تازگی" width="70" src="<%=p["theme:url"] %>/<%=Ws.Param(p, "theme:site_logo", "/assets/img/logo.png") %>">
                    </a>
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <form action="/search" method="get">
                            <div class="box_search d-flex">
                                <div class="btn_search"><i class="las la-search"></i></div>
                                <div class="flex-grow-1 input">
                                    <input id="headerSearch" name="sw" type="search" placeholder="نام غذای خود را بنویسید..." />
                                </div>
                                 <%--<div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        غذاها
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                       <a class="dropdown-item" href="#">غذاها</a>
                                        <a class="dropdown-item" href="#">غذاها</a>
                                        <a class="dropdown-item" href="#">غذاها</a>
                                    </div>
                                </div>--%>
                            </div>
                                <%--<div class="history">
                                     <ul class="p-0">
                                         <li><a class="text-dark" href="#">عنوان آخرین سرچ ها</a></li>
                                          <li><a  class="text-dark" href="#">عنوان آخرین سرچ ها</a></li>
                                          <li><a  class="text-dark" href="#">عنوان آخرین سرچ ها</a></li>
                                     </ul>
                                 </div>--%>
                            </form>
                        </div>
                         <%if (!WsUser.IsLogin())
  {%>
                        <div class="box_login">
                            <span data-toggle="modal" data-target="#loginregisterModal" class="cursor btn_site btn_green px-5 py-3"><i class="las la-user-circle"></i> ورود و ثبت نام </span>

                            <div class="modal fade" id="loginregisterModal" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
                                       <div class="modal-dialog modal-dialog-centered"  >
                                <form class="modal-content " id="verify_modal_content"  style="display: none;">
                                    <div class="modal-body p-5">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="text-center mb-2">ورود </h5>
                                        <p class="text-center mb-4">کد اعتبارسنجی ارسال شده به شماره  <i class="number_validatin_text"></i> را وارد نمائید</p>
                                        <input name="verifytoken" hidden="hidden" />
                                        <input name="mobile" hidden="hidden" />

                                        <input class="form-control mb-4 onEnter" name="verifycode"  data-target="#loginbtn" type="number" placeholder="   " />
                                        <label id="result_login"></label>
                                         <button class=" btn_site btn_site_green w-100" id="loginbtn" data-result-label="#result_login">ورود</button>
                                                                                <span class="reset_number"> تغییر شماره همراه </span>

                                    </div>

                                </form>


                                 <div class="modal-content " id="registerModal_content" style="display: none;">
                                    <form id="registerform" class="modal-body p-5 onSubmit" data-target="#registerbtn">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="text-center mb-2">ثبت نام در حس تازگی </h5>
                                        <p class="text-center mb-4">لطفا نام و نام خانوادگی و موبایل خود را وارد کنید</p>
                                        <input class="form-control mb-4" name="fname" id="fname" placeholder="نام  " />
                                        <input class="form-control mb-4" name="lname" id="lname" placeholder=" نام خانوادگی" />
                                        <input class="form-control mb-4" name="refcode" placeholder="  کد معرف  " value="<%=Ws.Param(p,"referalCode","")%>"  />

                                       <div class="btn-group-toggle mt-4 style2" data-toggle="buttons">
                                           <label class="btn active mb-2 px-5 py-3">
                                               <!--checked-->
                                               <input type="radio" value="0" name="gender" id="option1" autocomplete="off" checked>زن
                                           </label>
                                           <label class="btn  mb-2 px-5 py-3">
                                               <input type="radio" value="1" name="gender" id="option2" autocomplete="off"> مرد
                                           </label>

                                       </div>

                                        <h5 class="text-center mb-2">اعتبار سنجی شماره همراه </h5>
                                        <p class="text-center mb-4">کد اعتبارسنجی ارسال شده به شماره <i class="number_validatin_text"></i> را وارد نمائید</p>
    <input name="verifytoken" hidden="hidden" />
                                        <input name="mobile" hidden="hidden" />

                                        <input class="form-control mb-4 onEnter" data-target="#registerbtn" name="verifycode" placeholder="کد را وارد نمایید" />
                                                                                <label class="result"></label>

                                        <button class=" btn_site btn_site_green w-100" type="button" id="registerbtn" data-gotourl="/membership">ثبت نام</button>
                                        <span class="reset_number"> تغییر شماره همراه </span>
                                    </form>

                                </div>
                                          
                                     <div class="modal-content " id="get_mobile_content">
                                        <form id="userverifyform" class="modal-body p-5 " >
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                            <h5 class="text-center mb-2">ورود یا ثبت نام </h5>
                                            <p class="teass=xt-center mb-4">لطفا موبایل خود را وارد کنید</p>
                                            <input name="mobile" id="verify_mobile_input" class="form-control mb-4 onEnter" data-target="#verifysendbtn" type="tel" placeholder="مثلا 09121234567" />
                                            <label id="result_login_mobile"></label>
 
                                            <button class="mb-5 btn_site btn_site_green w-100" data-result-label="#result_login_mobile" type="button" id="verifysendbtn">ادامه</button>
                                            <p class="text-1">با ورود به حس تازگی با <a target="_blank" class=" color-green cursor"  href="/terms"  >قوانین وشرایط حریم خصوصی </a> موافق هستم</p> 
                                        </form>
                                
                                </div>



                            </div>

                          
                        </div>
                        <%}else{ %>
                        <div class="box_profile">
<%--                            <div class="message hovergreen cursor"><i class="las la-bell"></i> <span class="receive active"></span></div>--%>
                                    <div class="info_user ml-auto">
                                        <img src="<%=WsUser.GetAvatar(p["user:photo"],"/themes/default/assets/img/nopic.png","size") %>" alt="حس تازگی-کاربر" />
                                        <div class="back_txt ">
                                            <div class="dropdown ">
                                                <button class="dropdown-toggle hovergreen" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="name"><%=p["user:fname"]%> <%=p["user:lname"]%></span> <br /> 

                                                     <%if(!string.IsNullOrEmpty(p["userplan:type"]) &&p["userplan:type"]=="1"){%>
                                                                <span class="type">کاربر ویژه</span>

                                                            <%} %>

                                                         <%if(!string.IsNullOrEmpty(p["userplan:type"]) &&p["userplan:type"]=="2"){%>
                                                                                                        <span class="type">کاربر طلایی</span>

                                                         <%} %>
                                                      <%if(string.IsNullOrEmpty(p["userplan:type"]) ){%>
                                                                                                        <span class="type">کاربر عادی</span>

                                                         <%} %>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="/userprofile/Details"><i class="las la-user-circle"></i> پروفایل کاربری </a>
                                                   <%-- <a class="dropdown-item" href="/userpassword"><i class="las la-luck"></i> تغییر کلمه عبور </a>--%>
                                                    <%--<a class="dropdown-item" href="#"><i class="lab la-gratipay"></i> دستور پخت های مورد علاقه</a>--%>
<%--                                                    <a class="dropdown-item" href="/"><i class="las la-chart-pie"></i> گزارش عملکرد</a>--%>
                                                    <a class="dropdown-item" href="/userprofile/Payments"><i class="las la-edit"></i> وضعیت اشتراک</a>
                                                    <a class="dropdown-item cursor" id="signoutbtn"><i class="las la-sign-out-alt"></i> خروج</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <%} %>
                    </div>
                </div>
            </div>
        </div>

            <script type="application/ld+json">
{
  "@context": "https://schema.org/", 
  "@type": "Recipe", 
  "name": "<%= Ws.Param(p, "theme:site_title", "") %>",
  "image": "https://www.hesetazegi.com/themes/default/assets/img/logo.png",
  "description": "<%=Ws.Param(p, "theme:seo_description", "") %>",
  "keywords": "<%=Ws.Param(p, "theme:seo_keywords", "").Replace(System.Environment.NewLine, ",")%>",
  "author": {
    "@type": "Person",
    "name": "<%= Ws.Param(p, "theme:site_title", "") %>"
  },
  "prepTime": "",
  "cookTime": "", 
  "totalTime": "", 
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": ""
  }  
}
</script>
    </header>
 
        
        