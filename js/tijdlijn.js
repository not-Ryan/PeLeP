// Hier wordt gekeken welke emoji word gekozen
let emoji = ""
let emoji_op = document.getElementById("op");
let emoji_onder = document.getElementById("onder");
let emoji_boven = document.getElementById("boven");

emoji_onder.addEventListener("click", function(){
    if(emoji != "onder_niveau"){
        emoji = "onder_niveau";
        emoji_onder.style.backgroundColor = "#D5DDE4"
        emoji_op.style.backgroundColor = "white"
        emoji_boven.style.backgroundColor = "white"
        emoji_op.style.border = "none"
        emoji_boven.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_onder.style.border = "none"
        emoji_onder.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

emoji_op.addEventListener("click", function(){
    if(emoji != "op_niveau"){
        emoji = "op_niveau";
        emoji_op.style.backgroundColor = "#D5DDE4"
        emoji_onder.style.backgroundColor = "white"
        emoji_boven.style.backgroundColor = "white"
        emoji_onder.style.border = "none"
        emoji_boven.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_op.style.border = "none"
        emoji_op.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

emoji_boven.addEventListener("click", function(){
    if(emoji != "boven_niveau"){
        emoji = "boven_niveau";
        emoji_boven.style.backgroundColor = "#D5DDE4"
        emoji_onder.style.border = "none"
        emoji_op.style.border = "none"
        emoji_op.style.backgroundColor = "white"
        emoji_onder.style.backgroundColor = "white"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_boven.style.border = "none"
        emoji_boven.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

// Hier wordt samenwerken geselecteerd en gedeselecteerd
let show_sam = document.getElementById("samenwerken");
let sam = ""
show_sam.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-sam")
    var s = document.getElementById("samenwerken")
    if (sam == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        sam = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        sam = ""
    }
})

// Hier wordt reflecteren geselecteerd en gedeselecteerd
let show_ref = document.getElementById("reflecteren");
let ref = ""
show_ref.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-ref")
    var s = document.getElementById("reflecteren")
    if (ref == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        ref = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        ref = ""
    }
})

// Hier wordt boodschap geselecteerd en gedeselecteerd
let show_boo = document.getElementById("boodschap");
let boo = ""
show_boo.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-boo")
    var s = document.getElementById("boodschap")
    if (boo == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        boo = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        boo = ""
    }
})

// Hier wordt aanpassingsvermogen geselecteerd en gedeselecteerd
let show_aan = document.getElementById("aanpassingsvermogen");
let aan = ""
show_aan.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-aan")
    var s = document.getElementById("aanpassingsvermogen")
    if (aan == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        aan = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        aan = ""
    }
})

// Hier wordt pro-actief geselecteerd en gedeselecteerd
let show_pro = document.getElementById("pro-actief");
let pro = ""
show_pro.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-pro")
    var s = document.getElementById("pro-actief")
    if (pro == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        pro = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        pro = ""
    }
})

// Hier wordt plannen geselecteerd en gedeselecteerd
let show_pla = document.getElementById("plannen");
let pla = ""
show_pla.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-pla")
    var s = document.getElementById("plannen")
    if (pla == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        pla = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        pla = ""
    }
})

// Met deze functie wordt de pulse toegevoegd aan de database
function nieuw(){
    
    var titel = document.getElementById("popup-title-input").value;
    var tekst = document.getElementById("popup-pulse-context").value;

    // Hier wordt gecontroleerd of er een emoji, titel en tekst is gekozen
    if (emoji == "" || titel == "" || tekst == ""){
        // if (emoji == ""){
        //     document.getElementById("foutmelding-emoji").innerText = "Kies een emoji!"
        // }
        // if (titel == ""){
        //     document.getElementById("foutmelding-titel").innerText = "Vul een titel in!"
        // } 
        // if (tekst == ""){
        //     document.getElementById("foutmelding-tekst").innerText = "Vul een tekst in!"
        // }
    } else {

        // Hier word gekeken welke competenties er zijn toegevoegd
        var comp1 = "";
        var comp2 = "";
        var comp3 = "";
        var comp4 = "";
        var comp5 = "";
        var comp6 = "";
        console.log(comp1)
        if (document.getElementById("img-sam").style.display == 'inline-block'){
            comp1 = "samenwerken"
            console.log(1)
            console.log(comp1)
        } 
        if (document.getElementById("img-ref").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "reflecteren"
                console.log(1)
                console.log(comp1)
            } else {
                comp2 = "reflecteren"
                console.log(2)
                console.log(comp2)
            }
        }
        if(document.getElementById("img-pla").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "plannen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "plannen"
                console.log(2)
                console.log(comp2)
            } else {
                comp3 = "plannen"
                console.log(3)
                console.log(comp3)
            }
        }
        if(document.getElementById("img-boo").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "boodschap overbrengen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "boodschap overbrengen"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "boodschap overbrengen"
                console.log(3)
                console.log(comp3)
            } else {
                comp4 = "boodschap overbrengen"
                console.log(4)
                console.log(comp4)
            }
        }
        if(document.getElementById("img-pro").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "pro-actief"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "pro-actief"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "pro-actief"
                console.log(3)
                console.log(comp3)
            } else if (comp4 == ""){
                comp4 = "pro-actief"
                console.log(4)
                console.log(comp4)
            } else {
                comp5 = "pro-actief"
                console.log(5)
                console.log(comp5)
            }
        }
        if(document.getElementById("img-aan").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "aanpassingsvermogen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "aanpassingsvermogen"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "aanpassimgsvermogen"
                console.log(3)
                console.log(comp3)
            } else if (comp4 == ""){
                comp4 = "aanpassingsvermogen"
                console.log(4)
                console.log(comp4)
            } else if(comp5 == ""){
                comp5 = "aanpassingsvermogen"
                console.log(5)
                console.log(comp5)
            } else {
                comp6 = "aanpassingsvermogen"
                console.log(6)
                console.log(comp6)
            }
        }

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var tijd = date+' '+time;
        console.log(tijd)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4, "comp5":comp5, "comp6":comp6, "emoji":emoji, "datum-tijd":tijd });
        
        //Hier staan de fetch option
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        //Hier word gefetch en gekeken of er error zijn en de response word omgezet naar text en vervolgens word dat geconsole logged
        fetch("http://127.0.0.1:5000/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        document.getElementById("exampleModal").style.display = "none"
    }
}


// De data uit de database wordt op de pagina gezet
// fetch voor het overzicht van de pulses
fetch('http://127.0.0.1:5000/pulse', {
    method: "GET",
})
    .then(response => response.json())
    .then(json => {
        console.log(json)
        json.reverse();
        console.log(json)
        tabelbody = document.getElementById("timeline")
        var i = json;
        var pulse = 0;
        i.forEach(function() {
            let row = document.createElement("div");
            var id = pulse
            row.setAttribute("id", (id));
            tabelbody.appendChild(row);
            // Hier word de informatie uit de database gehaald
            var g = json[pulse].p.titel;
            var emoji = json[pulse].p.emoji;
            var comp1 = json[pulse].p.comp1;
            var comp2 = json[pulse].p.comp2;
            var comp3 = json[pulse].p.comp3;
            var comp4 = json[pulse].p.comp4;
            var comp5 = json[pulse].p.comp5;
            var comp6 = json[pulse].p.comp6;
            var t = json[pulse].p.tekst;
            var datum = json[pulse].p.datum;
            // Hier wordt gekeken of competentie 1 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp1 != undefined){
                var c1 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp1+`"></div>
                        <a class="comp`+id+`" id="competentie-link">`+comp1+`</a>
                    </div>
                </div>`
                console.log(1)
            } else {
                var c1 = ""
                console.log(1)
            }
            // Hier wordt gekeken of competentie 2 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp2 != undefined){
                var c2 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp2+`"></div>
                        <a class="comp`+id+`" id="competentie-link">`+comp2+`</a>
                    </div>
                </div>`
            console.log("2")
            } else {
                var c2 = ""
                console.log(2)
            }
            // Hier wordt gekeken of competentie 3 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp3 != undefined){
                var c3 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp3+`"></div>
                        <a class="comp`+id+`" id="competentie-link">`+comp3+`</a>
                    </div>
                </div>`
            console.log(3)
            } else {
                var c3 = ""
                console.log(3)
            }
            // Hier wordt gekeken of competentie 4 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp4 != undefined){
                var c4 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp4+`"></div>
                        <a class="comp`+id+`" id="competentie-link">`+comp4+`</a>
                    </div>
                </div>`
                console.log(4)
            } else {
                var c4 = ""
                console.log(4)
            }
            // Hier wordt gekeken of competentie 5 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp5 != undefined){
                var c5 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp5+`"></div>
                        <a class="comp`+id+`" id="competentie-link">`+comp5+`</a>
                    </div>
                </div>`
                console.log(c1)
            } else {
                var c5 = ""
                console.log(c1)
            }
            // Hier wordt gekeken of competentie 6 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp6 != undefined){
                var c6 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp6+`"></div>
                        <a class="comp`+id+`" id="competentie-link">`+comp6+`</a>
                    </div>
                </div>`
                console.log(c1)
            } else {
                var c6 = ""
                console.log(c1)
            }
            // hier wordt gekeken welke emoji is gekozen
            if (emoji == "boven_niveau"){
                var e = 
                `<div class="col p-3 me-2 pb-0 text-end">
                    <img src="../img/smile.png" id="emoji`+id+`" class="emoji">
                </div>`
            }
            if (emoji == "op_niveau"){
                var e = 
                `<div class="col p-3 me-2 pb-0 text-end">
                    <img src="../img/meh.png" id="emoji`+id+`" class="emoji">
                </div>`
            }
            if (emoji == "onder_niveau"){
                var e = 
                `<div class="col p-3 me-2 pb-0 text-end">
                    <img src="../img/sad (1).png" id="emoji`+id+`" class="emoji">
                </div>`
            }
            // hier word voor het id een 
            x = document.getElementById(id)
            x.innerHTML = `             
            <div class="container mb-4 mt-2" id="pulse-page">
                <div class="row">
                    <div class="col p-3 ms-2 mb-0 pb-0">
                        <h3 id="titel`+id+`">`+g+`</h3>
                    </div>
                    `+e+`
                </div>
                <div class="row ps-3 pe-3" id="comp`+id+`">
                `+c1+``+c2+``+c3+``+c4+``+c5+``+c6+`
                </div>
                <hr class="style1">
                <div class="row mt-4 mb-4">
                    <div class="col-sm-3 text-center">
                        <img src="../img/pf.png" class="picture">
                    </div>
                    <div class="col-sm-8 pl-4">
                    <h4 class="fw-bold">Lieke Crum `+datum+`</h4>
                    <p id="tekst`+id+`">`+t+`</p>
                    </div>
                </div>
                <hr class="style1">
                <div class="row">
                    <div class="col-sm-1 text-end p-0 pb-3">
                        <img src="../img/share.png" class="icon">
                    </div>
                    <div class="col-sm-1 text-center pb-3">
                        <img src="../img/edit (2).png" id="`+id+`" class="icon" data-bs-toggle="modal" data-bs-target="#bewerk-popup" onclick="bewerk_display(this.id)">
                    </div>
                    <div class="col-sm-9 pb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    <div class="col-sm-1 text-start p-0 pb-3">
                        <img src="../img/success (1).png" class="icon">
                    </div>
                </div>
            </div>`
            pulse = pulse + 1
        })
    })

// Functie voor de bewerk popup
function bewerk_display(clicked_id){
    console.log("id:");
    console.log(clicked_id);
    var titelid = "titel" + clicked_id;
    console.log(titelid)
    var titel = document.getElementById(titelid).innerHTML;
    console.log(document.getElementById(titelid))
    console.log("titel:")
    console.log(titel)
    var compid = "comp" + clicked_id;
    // hier word gekeken of er 1 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[0] != undefined){
        var comp1 = document.getElementsByClassName(compid)[0].innerHTML;
        console.log(comp1)
        var str = "img-" + comp1
        img = str.replace(/\s/g, '');
        console.log(img)
        var achtergrondid = comp1 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');
        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        sam = "gekozen"
        console.log(e.style.display);
    }
    // hier word gekeken of er 2 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[1] != undefined){
        var comp2 = document.getElementsByClassName(compid)[1].innerHTML;
        console.log(comp2)
        var str = "img-" + comp2
        img = str.replace(/\s/g, '');
        console.log(img)
        var achtergrondid = comp2 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');
        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    // hier word gekeken of er 3 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[2] != undefined){
        var comp3 = document.getElementsByClassName(compid)[2].innerHTML;
        console.log(comp3)
        var str = "img-" + comp3
        img = str.replace(/\s/g, '');
        console.log(img)
        var achtergrondid = comp3 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');
        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        sam = "gekozen"
        console.log(e.style.display);
    }
    // hier word gekeken of er 4 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[3] != undefined){
        var comp4 = document.getElementsByClassName(compid)[3].innerHTML;
        console.log(comp4)
        var str = "img-" + comp4
        img = str.replace(/\s/g, '');
        console.log(img)
        var achtergrondid = comp4 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');
        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        sam = "gekozen"
        console.log(e.style.display);
    }
    // hier word gekeken of er 5 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[4] != undefined){
        var comp5 = document.getElementsByClassName(compid)[4].innerHTML;
        console.log(comp5)
        var str = "img-" + comp5
        img = str.replace(/\s/g, '');
        console.log(img)
        var achtergrondid = comp5 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');
        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        sam = "gekozen"
        console.log(e.style.display);
    }
    // hier word gekeken of er 6 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[5] != undefined){
        var comp6 = document.getElementsByClassName(compid)[5].innerHTML;
        console.log(comp6)
        var str = "img-" + comp6
        img = str.replace(/\s/g, '');
        console.log(img)
        var achtergrondid = comp6 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');
        console.log(achtergrond)
        var e = document.getElementById(img);
        var s = document.getElementById(achtergrond);
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    var tekstid = "tekst" + clicked_id;
    console.log(tekstid)
    var tekst = document.getElementById(tekstid).innerHTML;
    console.log(tekst)
    console.log(document.getElementById(tekstid))
    var emojiid = "emoji" + clicked_id;
    console.log(emojiid)
    var emoji = document.getElementById(emojiid).src;
    console.log(document.getElementById(emojiid).src)
    console.log(emoji)

    
    if (emoji == "http://127.0.0.1:5500/img/smile.png"){
        var a = document.getElementById("boven-bewerk")
        a.style.backgroundColor = "#D5DDE4"
        document.getElementById("op-bewerk").style.backgroundColor = "white"
        document.getElementById("onder-bewerk").style.backgroundColor = "white"
    } else if( emoji == "http://127.0.0.1:5500/img/meh.png"){
        var a = document.getElementById("op-bewerk")
        a.style.backgroundColor = "#D5DDE4"
        document.getElementById("boven-bewerk").style.backgroundColor = "white"
        document.getElementById("onder-bewerk").style.backgroundColor = "white"
    } else{
        var a = document.getElementById("onder-bewerk")
        a.style.backgroundColor = "#D5DDE4"
        document.getElementById("op-bewerk").style.backgroundColor = "white"
        document.getElementById("boven-bewerk").style.backgroundColor = "white"
    }
    

    document.getElementById("popup-title-bewerk").value = titel;
    document.getElementById("popup-tekst-bewerk").value = tekst

}

// Hier wordt gekeken welke emoji word gekozen
let emoji_bewerk = ""
let emoji_op_bewerk = document.getElementById("op-bewerk");
let emoji_onder_bewerk = document.getElementById("onder-bewerk");
let emoji_boven_bewerk = document.getElementById("boven-bewerk");

emoji_onder_bewerk.addEventListener("click", function(){
    if(emoji != "onder_niveau"){
        emoji = "onder_niveau";
        emoji_onder_bewerk.style.backgroundColor = "#D5DDE4"
        emoji_op_bewerk.style.backgroundColor = "white"
        emoji_boven_bewerk.style.backgroundColor = "white"
        emoji_op_bewerk.style.border = "none"
        emoji_boven_bewerk.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_onder_bewerk.style.border = "none"
        emoji_onder_bewerk.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

emoji_op_bewerk.addEventListener("click", function(){
    if(emoji != "op_niveau"){
        emoji = "op_niveau";
        emoji_op_bewerk.style.backgroundColor = "#D5DDE4"
        emoji_onder_bewerk.style.backgroundColor = "white"
        emoji_boven_bewerk.style.backgroundColor = "white"
        emoji_onder_bewerk.style.border = "none"
        emoji_boven_bewerk.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_op_bewerk.style.border = "none"
        emoji_op_bewerk.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

emoji_boven_bewerk.addEventListener("click", function(){
    if(emoji != "boven_niveau"){
        emoji = "boven_niveau";
        emoji_boven_bewerk.style.backgroundColor = "#D5DDE4"
        emoji_onder_bewerk.style.border = "none"
        emoji_op_bewerk.style.border = "none"
        emoji_op_bewerk.style.backgroundColor = "white"
        emoji_onder_bewerk.style.backgroundColor = "white"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_boven_bewerk.style.border = "none"
        emoji_boven_bewerk.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});


// // Hier wordt samenwerken geselecteerd en gedeselecteerd
// let show_sam = document.getElementById("samenwerken");
// let sam = ""
// show_sam.addEventListener("click", function(){
//     console.log(1)
//     var e = document.getElementById("img-sam")
//     var s = document.getElementById("samenwerken")
//     if (sam == "") {
//         e.style.display = 'inline-block';
//         s.style.backgroundColor = '#E0E0E0';
//         sam = "gekozen"
//         console.log(e.style.display);
//     } else {
//         e.style.display = 'none'
//         s.style.backgroundColor = '#f1f1f1'
//         sam = ""
//     }
// })

// Deze functie zorgt er voor dat de bewerk popup weer leeg is als je hem anuleerd
function leeg(){
    // hiermee wordt de achtergrondkleur van de comopetenties weet als ongeselecteerd
    var a = document.querySelectorAll(".popup");
    for (i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = "#f1f1f1";
    }
    // hiermee gaat het vinkje weer weg bij geselecteerde competenties
    var b = document.querySelectorAll(".img-gekozen");
    for (i = 0; i < b.length; i++) {
        b[i].style.display = "none";
}}