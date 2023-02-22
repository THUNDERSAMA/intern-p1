 
        <aside class="left-sidebar" data-sidebarbg="skin6">
            <!-- Sidebar scroll-->
            
            
           
               
            
            <div class="scroll-sidebar">
                <!-- Sidebar navigation--> @if(Session::get('userlevel')=='1')
                <nav class="sidebar-nav">
               <h3 style="margin-left: 26px;">Tutor</h3>
                    <ul id="sidebarnav">
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="dashboard" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span
                                    class="hide-menu">Dashboard</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="profile" aria-expanded="false"><i
                                    class="mdi mdi-account-network"></i><span class="hide-menu">Profile</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="upgrade" aria-expanded="false"><i class=" mdi mdi-arrow-up-bold"></i><span
                                    class="hide-menu">Upgrade Membership</span></a></li>
                       
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-file-image"></i><span
                                    class="hide-menu">Upload media</span></a></li>
                                     <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-trending-up"></i><span
                                    class="hide-menu">Boost profile</span></a></li>
                           <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false"><i class="m-r-10 mdi mdi-chevron-right"></i><span
                                    class="hide-menu">Student</span></a> 
         
        <div class="collapse" id="dashboard-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-history"></i>History</a></li>
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-account-box"></i>Students</a></li>
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-star"></i>Ratings</a></li>
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-eye"></i>Previews</a></li>
          </ul>
        </div></li>
        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse1" aria-expanded="false"><i class="m-r-10 mdi mdi-chevron-right"></i><span
                                    class="hide-menu">Contact us</span></a> 
         
        <div class="collapse" id="dashboard-collapse1" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-wechat"></i>Chat with us</a></li>
             <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-phone"></i>Contact us</a></li>
            <li class="sidebar-item"><a href="#" class="link-dark rounded">Suggest us</a></li>
            
          </ul>
        </div></li>
         <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-chart-bar"></i><span
                                    class="hide-menu">Analytics </span></a></li>
                                     <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-account-multiple"></i><span
                                    class="hide-menu">Referal</span></a></li>
                    </ul>

                </nav>
                @elseif(Session::get('userlevel')=='2')
                <nav class="sidebar-nav">
                <h3 style="margin-left: 26px;">Student</h3>
                    <ul id="sidebarnav">
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="dashboard" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span
                                    class="hide-menu">Dashboard</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="profile" aria-expanded="false"><i
                                    class="mdi mdi-account-network"></i><span class="hide-menu">Profile</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="classes.html" aria-expanded="false"><i class="mdi mdi-chart-bar"></i><span
                                    class="hide-menu">Insight</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-upload"></i><span
                                    class="hide-menu">Post with us</span></a></li>
                       <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-account"></i><span
                                    class="hide-menu">Account</span></a></li>
                                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="teacher.html" aria-expanded="false"><i class="mdi mdi-account-multiple"></i><span
                                    class="hide-menu">Referal</span></a></li>
                           <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false"><i class="m-r-10 mdi mdi-chevron-right"></i><span
                                    class="hide-menu">Help center</span></a> 
       <div class="collapse" id="dashboard-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-wechat"></i>Chat with us</a></li>
            <li class="sidebar-item"><a href="#" class="link-dark rounded"><i class="mdi mdi-phone"></i>Contact us</a></li>
         
          </ul>
        </div></li>
                    </ul>

                </nav>
                @else
                <h4>some error occured</h4>

                 @endif
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>