        $('document').ready(function() {

            //checks the weather all the check boxses arechecd or not =============================
            if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == true && $('#check2').is(':checked') == true && $('#check3').is(':checked') == true) {
                $.allChars();
            }

            // function for Copying
            $('#copy').click(function() {
                $('#passval').select();
                document.execCommand('copy');
            });

            // function for reloading
            $('#refresh').click(function() {
                $.allChars();
            });


            $('.check,#len').change(function() {
                //all=============================
                if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == true && $('#check2').is(':checked') == true && $('#check3').is(':checked') == true) {
                    $.allChars();
                }
                // UCLCNUM ========================= 
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == true && $('#check2').is(':checked') == true && $('#check3').is(':checked') == false) {
                    $.UCLCNUM();
                }
                // UCNUMSC ========================= 
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == false && $('#check2').is(':checked') == true && $('#check3').is(':checked') == true) {
                    $.UCNUMSC();
                }
                // LCNUMSC ========================= 
                else if ($('#check0').is(':checked') == false && $('#check1').is(':checked') == true && $('#check2').is(':checked') == true && $('#check3').is(':checked') == true) {
                    $.LCNUMSC();
                }
                // UCLCSC ========================= 
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == true && $('#check2').is(':checked') == false && $('#check3').is(':checked') == true) {
                    $.UCLCSC();
                }
                // LCSC ========================= 
                else if ($('#check0').is(':checked') == false && $('#check1').is(':checked') == true && $('#check2').is(':checked') == false && $('#check3').is(':checked') == true) {
                    $.LCSC();
                }
                // UCSC ========================= 
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == false && $('#check2').is(':checked') == false && $('#check3').is(':checked') == true) {
                    $.UCSC();
                }
                // NUMSC ========================= 
                else if ($('#check0').is(':checked') == false && $('#check1').is(':checked') == false && $('#check2').is(':checked') == true && $('#check3').is(':checked') == true) {
                    $.NUMSC();
                }
                // UCLC ========================= 
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == true && $('#check2').is(':checked') == false && $('#check3').is(':checked') == false) {
                    $.UCLC();
                }
                // UCNUM ========================= 
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == false && $('#check2').is(':checked') == true && $('#check3').is(':checked') == false) {
                    $.UCNUM();
                }
                // LCNUM ========================= 
                else if ($('#check0').is(':checked') == false && $('#check1').is(':checked') == true && $('#check2').is(':checked') == false && $('#check3').is(':checked') == false) {
                    $.LCNUM();
                }
                // UC
                else if ($('#check0').is(':checked') == true && $('#check1').is(':checked') == false && $('#check2').is(':checked') == false && $('#check3').is(':checked') == false) {
                    $.UC();
                }
                // LC 
                else if ($('#check0').is(':checked') == false && $('#check1').is(':checked') == true && $('#check2').is(':checked') == false && $('#check3').is(':checked') == false) {
                    $.LC();
                }
                // NUM 
                else if ($('#check0').is(':checked') == false && $('#check1').is(':checked') == false && $('#check2').is(':checked') == true && $('#check3').is(':checked') == false) {
                    $.NUM();
                }
                //ERROR 
                else {
                    alert('ONLY SPECIAL CHARACTERS CAN NOT BE CHECKED');
                    $('.check').prop("checked", true);
                    $.allChars();
                }
            });
        });



        // for genrating password with all characters
        $.allChars = function() {
            var str0 = "0122456789abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+_-[]{}~''?><:";
            var num0 = parseInt($('#len').val());
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < num0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };


        $.UCLCNUM = function() {
            var str0 = "0122456789abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };


        //UCNUMSC=================================================================
        $.UCNUMSC = function() {
            var str0 = "0122456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+_-[]{}~''?><:";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //LCNUMSC=================================================================
        $.LCNUMSC = function() {
            var str0 = "0122456789abcdefghijklmnopqrstuvwxz!@#$%&*()+_-[]{}~''?><:";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //UCLCSC=================================================================
        $.UCLCSC = function() {
            var str0 = "abcdefghijklmnopqrstuvwxz!@#$%&*()+_-[]{}~''?><:";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //NUMSC=================================================================
        $.NUMSC = function() {
            var str0 = "0122456789!@#$%&*()+_-[]{}~''?><:";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //UCSC=================================================================
        $.UCSC = function() {
            var str0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+_-[]{}~''?><:";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //LCSC=================================================================
        $.LCSC = function() {
            var str0 = "abcdefghijklmnopqrstuvwxz!@#$%&*()+_-[]{}~''?><:";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //UC=================================================================
        $.UC = function() {
            var str0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //LC=================================================================
        $.LC = function() {
            var str0 = "abcdefghijklmnopqrstuvwxz";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //NUM=================================================================
        $.NUM = function() {
            var str0 = "0122456789";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //UCNUM=================================================================
        $.UCNUM = function() {
            var str0 = "0122456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //LCNUM=================================================================
        $.LCNUM = function() {
            var str0 = "0122456789abcdefghijklmnopqrstuvwxz";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };

        //UCLC=================================================================
        $.LCNUM = function() {
            var str0 = "abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var num0 = $('#len').val();
            var temp0 = parseInt(num0);
            var val0 = '';
            //LOOP FOR ALPHABATES
            for (var i = 0; i < temp0; i++) {
                var randomNumber = Math.floor(Math.random() * str0.length);
                val0 += str0.substring(randomNumber, randomNumber + 1);
            }
            $('#passval').val(val0);
            $.bar_Func();
        };


        //SETTING BAR
        $.bar_Func = function() {
            var num = $('#len').val();
            var temp = parseInt(num);
            if (temp >= 16) {
                $('#bar').css({
                    "width": "100%",
                    "background-color": "green"
                });
                $('#level').html('STRONG');
                $('#level').attr("style", "color:black");
            } else if (temp >= 12 && temp < 16) {
                $('#bar').css({
                    "width": "80%",
                    "background-color": "#2a9d8f"
                });
                $('#level').html('FAIRLY STRONG');
                $('#level').attr("style", "color:black");
            } else if (temp >= 8 && temp < 12) {
                $('#bar').css({
                    "width": "50%",
                    "background-color": "orange"
                });
                $('#level').html('Normal');
                $('#level').attr("style", "color:black");
            } else if (temp >= 4 && temp < 8) {
                $('#bar').css({
                    "width": "30%",
                    "background-color": "red"
                });
                $('#level').html('WEEK');
                $('#level').attr("style", "color:black");
            } else if (temp >= 0 && temp < 4) {
                $('#bar').css({
                    "width": "15%",
                    "background-color": "red"
                });
                $('#level').html('TOO WEEK');
                $('#level').attr("style", "color:black");
            } else {
                $('#bar').css({
                    "width": "0%",
                    "background-color": "none"
                });
                $('#len').val(0);
                $('#level').html('NULL');
                $('#level').attr("style", "color:red");

            }
        };