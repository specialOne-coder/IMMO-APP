<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Register</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>
        <? 
            $id = $_GET['id'];
            $infos = file_get_contents("http://localhost/immo-api/contrat/$id",null,null);
            $json = json_decode($infos,true);
        ?>
<body class="bg-gradient-primary">

    <div id="wrapper">
    <script src="js/menu.js"></script>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="card o-hidden border-0 shadow-lg my-5" style="width: 85% ;margin: auto;">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Update Contracts !</h1>
                            </div>
                            <form class="proprios">
                                    <div class="col-sm-6 mb-3 mb-sm-0" >
                                        <input type="hidden" class="form-control form-control-user" id="exampleFirstName" name="idContrat"
                                            placeholder="First Name" value="<?  echo $json[0]["idContrat"]; ?>" required>
                                    </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <select name="idMaison" id="selectm" class="form-control">
                                            <option value="<?  echo $json[0]["idMaison"]; ?>"><?  echo $json[0]["nomMaison"]; ?></option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <select name="idLocataire" id="selectl" class="form-control">
                                            <option value="<?  echo $json[0]["idLocataire"]; ?>"><?  echo $json[0]["nomLocataire"]; ?></option>>
                                        </select>
                                    </div> <br><br>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName" name="codeContrat"
                                            placeholder="Code Contrat" value="<?  echo $json[0]["codeContrat"]; ?>" required>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" class="form-control form-control-user" id="exampleInputEmail" name="titreContrat"
                                        placeholder="Titre Contrat" value="<?  echo $json[0]["titreContrat"]; ?>" required>
                                    </div><br><br>
                                    <!-- <div class="col-sm-6">
                                        <textarea type="text" class="form-control form-control-user" id="exampleLastName" name="codeContrat"
                                            placeholder="Termes Contrat" rows="2" required></textarea><br>
                                    </div>  -->
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="date" class="form-control form-control-user" id="exampleInputEmail" name="debutContrat"
                                        placeholder="Debut Contrat" value="<?  echo $json[0]["debutContrat"]; ?>" required>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="date" class="form-control form-control-user" id="exampleInputEmail" name="finContrat"
                                            placeholder="Fin Contrat" value="<?  echo $json[0]["finContrat"]; ?>" required>
                                    </div><br><br>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleInputEmail" name="caution"
                                        placeholder="Caution" value="<?  echo $json[0]["caution"]; ?>" required>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleInputEmail" name="avance"
                                            placeholder="Avance" value="<?  echo $json[0]["avance"]; ?>" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-user" id="exampleLastName" name="termesContrat"
                                    placeholder="Termes Contrat" rows="2" value="<?  echo $json[0]["termesContrat"]; ?>" required></textarea>
                                </div>
                                <button class="btn btn-primary btn-user btn-block">
                                    Update Contracts
                                </button>
                                <hr>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

    </div>
</div>
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>
    <script src="js/updateCtr.js"></script>
    <script src="js/listcontrats.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/jquery.min.js"></script>
</body>

</html>