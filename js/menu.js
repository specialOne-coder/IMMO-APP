document.write(`<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">ImmoApp <sup>2</sup></div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
    <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Interface
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-male"></i>
        <span>Locataires</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Vos locataires:</h6>
            <a class="collapse-item" href="registerLoc.html">nouveau locataire</a>
            <a class="collapse-item" href="listLoc.html">les locataires</a>
        </div>
    </div>
</li>

<!-- Proprios -->

<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePro"
        aria-expanded="true" aria-controls="collapsePro">
        <i class="fas fa-fw fa-parking"></i>
        <span>Proprietaires</span>
    </a>
    <div id="collapsePro" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Vos proprietaires:</h6>
            <a class="collapse-item" href="registerProp.html">nouveau proprietaire</a>
            <a class="collapse-item" href="listProp.html">les proprietaires</a>
        </div>
    </div>
</li>

<!-- Maisons -->

<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseHouse"
        aria-expanded="true" aria-controls="collapseHouse">
        <i class="fas fa-fw fa-house-user"></i>
        <span>Maisons</span>
    </a>
    <div id="collapseHouse" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Vos maisons:</h6>
            <a class="collapse-item" href="registerHouse.html">nouvelle maison</a>
            <a class="collapse-item" href="listHouse.html">les maisons</a>
        </div>
    </div>
</li>

<!-- Contrats -->

<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCtr"
        aria-expanded="true" aria-controls="collapseCtr">
        <i class="fas fa-fw fa-file-signature"></i>
        <span>Contrats</span>
    </a>
    <div id="collapseCtr" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Vos contrats:</h6>
            <a class="collapse-item" href="registerCtr.html">nouveau contrat</a>
            <a class="collapse-item" href="listCtr.html">les contrats</a>
        </div>
    </div>
</li>


<!-- Règlements -->

<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseReg"
        aria-expanded="true" aria-controls="collapseReg">
        <i class="fab fa-fw fa-elementor"></i>
        <span>Règlements</span>
    </a>
    <div id="collapseReg" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Vos règlements:</h6>
            <a class="collapse-item" href="registerReg.html">nouveau reglement</a>
            <a class="collapse-item" href="listReg.html">les reglements</a>
        </div>
    </div>
</li>


<!-- Nav Item - Utilities Collapse Menu 
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">Colors</a>
            <a class="collapse-item" href="utilities-border.html">Borders</a>
            <a class="collapse-item" href="utilities-animation.html">Animations</a>
            <a class="collapse-item" href="utilities-other.html">Other</a>
        </div>
    </div>
</li> -->

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Addons
</div>

<!-- Nav Item - Pages Collapse Menu 
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
    </a>
    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
    </div>
</li> -->

<!-- Nav Item - Charts -->
<li class="nav-item">
    <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></a>
</li>

<!-- Nav Item - Tables -->
<li class="nav-item">
    <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

<!-- Sidebar Message -->
<div class="sidebar-card">
    <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="">
    <p class="text-center mb-2"><strong>Immo App</strong> une application vous permettant de gerer vos différentes locations </p>
    <a class="btn btn-success btn-sm" href="404.html">commencer!</a>
</div>

</ul>`)