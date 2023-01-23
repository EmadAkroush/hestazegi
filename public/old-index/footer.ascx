<%@ Control Language="C#" ClassName="WsUserControl" Inherits="WebsanCore.WsUserControl" AutoEventWireup="true" %>


 <!--footer-->

                <footer id="footer">
                    <div class="container-fulid my-4">
                        <div class="row ">
                            <div class="toppage" data-toggle="tooltip" data-placement="bottom" title="رفتن به اول صفحه"><span><i class="las la-angle-up"></i></span></div>
                            <div class="col-lg-6 col-md-12 pt-5">
                                 <div class="d-flex flex-wrap col-12 p-0">
                                     <div class="logo_footer col-12 p-0 ">
                                    <a href="/">
                                        <img alt="لوگو حس تازگی"  width="85" src="<%=p["theme:url"] %>/assets/img/logo.png">
                                    </a>
                                </div>
                                     <div class="col-12 p-0">
                                          <p>
                                    <%=Ws.Param(p, "theme:site_about", "") %>
                                  </p>
                                         <div class="social ">
     <%if (Ws.Param(p, "theme:social_instagram", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_instagram", "") %>" target="_blank" title="instagram"><i class="lab la-instagram text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_telegram", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_telegram", "") %>" target="_blank" title="telegram"><i class="lab la-telegram text-8"></i></a><%} %>
											<%if (Ws.Param(p, "theme:social_facebook", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_facebook", "") %>" target="_blank" title="facebook"><i class="lab la-facebook text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_twitter", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_twitter", "") %>" target="_blank" title="twitter"><i class="lab la-twitter text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_linkedin", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_linkedin", "") %>" target="_blank" title="linkedin"><i class="lab la-linkedin-in text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_pinterest", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_pinterest", "") %>" target="_blank" title="pinterest"><i class="lab la-pinterest text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_whatsapp", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_whatsapp", "") %>" target="_blank" title="whatsapp"><i class="lab la-whatsapp text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_skype", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_skype", "") %>" target="_blank" title="skype"><i class="lab la-skype text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_aparat", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_aparat", "") %>" target="_blank" title="aparat"><div class="icon_aparat icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_youtube", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_youtube", "") %>" target="_blank" title="youtube"><i class="lab la-youtube text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_eitaa", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_eitaa", "") %>" target="_blank" title="eitaa"><div class="icon_eta icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_sorush", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_sorush", "") %>" target="_blank" title="sorush"><div class="icon_sorosh icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_igap", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_igap", "") %>" target="_blank" title="igap"><div class="icon_igap icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_bale", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_bale", "") %>" target="_blank" title="bale"><div class="icon_bale icon_svg d-inline-block"></div></a><%} %>

                                 </div>
                                     </div>
                                 </div>
                                <hr />
                                 <div class="col-12 p-0">
                                       <h5 class="text-4 font-weight-semibold text-color-dark ">مجوزها و گواهینامه ها</h5>
                                <ul class="d-flex flex-wrap mb-0">
                                    <li><a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=269863&amp;Code=fJa11u2Q5MuRKBJk2Rwh"><img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=269863&amp;Code=fJa11u2Q5MuRKBJk2Rwh" alt="اینماد حس تازگی" style="cursor:pointer;width:75px" id="fJa11u2Q5MuRKBJk2Rwh"></a></li>
                                   <li><img referrerpolicy='origin' id = 'rgvjesgtnbqeapfunbqergvj' style = 'cursor:pointer;width:75px' onclick = 'window.open("https://logo.samandehi.ir/Verify.aspx?id=302523&p=xlaoobpduiwkdshwuiwkxlao", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")' alt = 'logo-samandehi' src = 'https://logo.samandehi.ir/logo.aspx?id=302523&p=qftilymaodrfujynodrfqfti' /></li>
                                     <li><img src="<%=p["theme:url"] %>/assets/img/unesco.png" width="85" /></li>
                                </ul>
                                 </div>
                            </div>
                             <div class="col-lg-6 col-md-12">
                                 <div class="d-flex flex-wrap ">
                                 <div class="mb-5 col-sm-4 col-12 mb-lg-0 pt-5">
                                <h5 class="text-4 font-weight-semibold text-color-dark mb-4">دسترسی سریع</h5>

                                <ul>
                                    <li><a href="/about" class="text-4 ">درباره حس تازگی</a></li>
                                     <li><a href="/faq" class="text-4 ">سوالات متداول</a></li>
                                    <li><a href="/blogs" class="text-4 ">مجله حس تازگی</a></li>
                                    <li><a href="/<%--contact--%>about" class="text-4 ">ارتباط با ما</a></li>
                                    <li><a href="/terms" class="text-4 ">   قوانین و مقررات  </a></li>
                                    <%--<li><a href="/privacy" class="text-4 ">   حریم خصوصی  </a></li>--%>
                                    <li><a href="/membership" class="text-4 ">     خرید اشتراک  </a></li>
                                    <li><a href="/references" class="text-4 ">منابع</a></li>
                                </ul>
                                
                            </div>
                                 <div class="col-sm-8 col-12 p-0 ">
                                    <form id="submit_newsletter" class="px-4 pt-5 submit_newsletter">
                                <h5 class="text-4 font-weight-semibold text-color-dark mb-4">عضویت در خبرنامه</h5>
                                <p class=" mb-1">با عضویت در خبرنامه از سرویس های زیر بهره مند خواهید شد</p>
                                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" name="newsletter_types" value="newRecipes" class="custom-control-input" id="customControlInline">
                                    <label class="custom-control-label" for="customControlInline">رسپی های جدید</label>
                                </div>
                                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" name="newsletter_types" value="newTricks"  class="custom-control-input" id="customControlInline2">
                                    <label class="custom-control-label" for="customControlInline2">نکات جدید در آشپزی</label>
                                </div>
                                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" name="newsletter_types" value="newsUpdates"  class="custom-control-input" id="customControlInline3">
                                    <label class="custom-control-label" for="customControlInline3">جدیدترین اطلاعات تغذیه</label>
                                </div>

                            
                                <div class="box_newsletter2 mt-3">
                                    <div class="d-flex">
                                        <div class="m-2"><i class="las la-envelope"></i></div>
                                    <input placeholder="ایمیل خود را وارد نمائید" class="flex-grow-1" type="email" name="email">
                                    </div>
                                    
                                </div>
                                        <div class="col-12 mt-4 p-0"><button class="btn_site btn_green px-4 py-2 form_info_submit w-100"  data-form="#submit_newsletter" data-message="#newsletter_text" data-server-mod="SubmitNewsLetter" type="button">  عضویت</button></div>
                                    <div id="newsletter_text"></div>
</form>
                            </div></div>
                             </div>

                          <%--  <div class="col-md-12 col-lg-4 mb-5 mb-lg-0">
                                <div class="logo_footer">
                                    <a href="/">
                                        <img alt="لوگو حس تازگی" width="85" src="<%=p["theme:url"] %>/assets/img/logo.png">
                                    </a>
                                </div>
                                <p>
                                    <%=Ws.Param(p, "theme:site_about", "") %>
                                  </p>

                                <div class="social mt-3">
     <%if (Ws.Param(p, "theme:social_instagram", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_instagram", "") %>" target="_blank" title="instagram"><i class="lab la-instagram text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_telegram", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_telegram", "") %>" target="_blank" title="telegram"><i class="lab la-telegram text-8"></i></a><%} %>
											<%if (Ws.Param(p, "theme:social_facebook", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_facebook", "") %>" target="_blank" title="facebook"><i class="lab la-facebook text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_twitter", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_twitter", "") %>" target="_blank" title="twitter"><i class="lab la-twitter text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_linkedin", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_linkedin", "") %>" target="_blank" title="linkedin"><i class="lab la-linkedin-in text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_pinterest", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_pinterest", "") %>" target="_blank" title="pinterest"><i class="lab la-pinterest text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_whatsapp", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_whatsapp", "") %>" target="_blank" title="whatsapp"><i class="lab la-whatsapp text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_skype", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_skype", "") %>" target="_blank" title="skype"><i class="lab la-skype text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_aparat", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_aparat", "") %>" target="_blank" title="aparat"><div class="icon_aparat icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_youtube", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_youtube", "") %>" target="_blank" title="youtube"><i class="lab la-youtube text-8"></i></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_eitaa", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_eitaa", "") %>" target="_blank" title="eitaa"><div class="icon_eta icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_sorush", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_sorush", "") %>" target="_blank" title="sorush"><div class="icon_sorosh icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_igap", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_igap", "") %>" target="_blank" title="igap"><div class="icon_igap icon_svg d-inline-block"></div></a><%} %>
                                            <%if (Ws.Param(p, "theme:social_bale", "")!="") {%><a href="<%=Ws.Param(p, "theme:social_bale", "") %>" target="_blank" title="bale"><div class="icon_bale icon_svg d-inline-block"></div></a><%} %>

                                 </div>
                            </div>
                            <div class="col-md-4 col-lg-2 mb-5 col-sm-6 col-12 mb-lg-0">
                                <h5 class="text-4 font-weight-semibold text-color-dark mb-4">دسترسی سریع</h5>

                                <ul>
                                    <li><a href="/about" class="text-4 ">درباره حس تازگی</a></li>
                                     <li><a href="/faq" class="text-4 ">سوالات متداول</a></li>
                                    <li><a href="/blogs" class="text-4 ">مجله حس تازگی</a></li>
                                    <li><a href="/about" class="text-4 ">ارتباط با ما</a></li>
                                    <li><a href="/references" class="text-4 ">منابع</a></li>
                                </ul>
                                
                            </div>
                            <div class="col-md-4 col-lg-2 col-sm-6 mb-5 col-sm-6 col-12 mb-lg-0">
                                <h5 class="text-4 font-weight-semibold text-color-dark mb-4">مجوزها و گواهینامه ها</h5>
                                <ul class="">
                                    <li><a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=269863&amp;Code=fJa11u2Q5MuRKBJk2Rwh"><img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=269863&amp;Code=fJa11u2Q5MuRKBJk2Rwh" alt="اینماد حس تازگی" style="cursor:pointer;width:85px" id="fJa11u2Q5MuRKBJk2Rwh"></a></li>
                                   <li><img referrerpolicy='origin' id = 'rgvjesgtnbqeapfunbqergvj' style = 'cursor:pointer;width:85px' onclick = 'window.open("https://logo.samandehi.ir/Verify.aspx?id=302523&p=xlaoobpduiwkdshwuiwkxlao", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")' alt = 'logo-samandehi' src = 'https://logo.samandehi.ir/logo.aspx?id=302523&p=qftilymaodrfujynodrfqfti' /></li>
                                     
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                    <form id="submit_newsletter">
                                <h5 class="text-4 font-weight-semibold text-color-dark mb-4">عضویت در خبرنامه</h5>
                                <p class=" mb-1">با عضویت در خبرنامه از سرویس های زیر بهره مند خواهید شد</p>
                                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" name="newsletter_types" value="newRecipes" class="custom-control-input" id="customControlInline">
                                    <label class="custom-control-label" for="customControlInline">رسپی های جدید</label>
                                </div>
                                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" name="newsletter_types" value="newTricks"  class="custom-control-input" id="customControlInline2">
                                    <label class="custom-control-label" for="customControlInline2">نکات جدید در آشپزی</label>
                                </div>
                                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" name="newsletter_types" value="newsUpdates"  class="custom-control-input" id="customControlInline3">
                                    <label class="custom-control-label" for="customControlInline3">جدیدترین اطلاعات تغذیه</label>
                                </div>

                            
                                <div class="box_newsletter mt-3">
                                    <div class="mx-2"><i class="las la-at"></i></div>
                                    <div class="flex-grow-1"><input placeholder="پست الکترونیک خود را بنویسید" type="email" name="email"></div>
                                    <div><button class="btn_site btn_green px-4 py-2 form_info_submit"  data-form="#submit_newsletter" data-message="#newsletter_text" data-server-mod="SubmitNewsLetter" type="button">  عضویت</button></div>
                                </div>
                                    <div id="newsletter_text"></div>
</form>
                            </div>--%>
                        </div>
                    </div>
                    <div class="footer-copyright ">
                        <div class="container py-2">
                            <div class="row "> 
                                <div class="col d-flex align-items-center justify-content-center">
                                    <p> <span class="cg fs12">کلیه حقوق مادی و معنوی این سایت متعلق به <span class="font-weight-bold ">شرکت حس تازگی سفره خانواده </span> میباشد.<br />
                            <span class="cg fs12">استفاده از مطالب سایت حس تازگی فقط برای مقاصد غیر تجاری و با ذکر منبع بلامانع است.</span></span>
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>








