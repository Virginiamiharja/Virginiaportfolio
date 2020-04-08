const chgTitle = () => {
    document.getElementById("titleAboutMe").innerHTML = "TENTANG SAYA"
}

const chgTitle1 = () => {
    document.getElementById("titleAboutMe").innerHTML = "ABOUT ME"
}

const chgDesc = () => {
    document.getElementById("descAboutMe").innerHTML = `Kendall Nicole Jenner (lahir 3 November 1995; umur 24 tahun) adalah bintang acara realita televisi dan model berkebangsaan Amerika Serikat. Dia pada awalnya terkenal 
    karena tampil di acara realitas televisi di siaran E! yang berjudul Keeping Up with the Kardashians. Setelah bekerja di kampanye iklan dan pemotretan, Jenner mendapat terobosan di tahun 2014 dan 2015, 
    berjalan di panggung untuk perancang busana kelas atas selama New York, Milan, dan Paris Fashion Weeks. Jenner telah melakukan editorial dan pemotretan sampul untuk majalh LOVE dan berbagai edisi Vogue internasional, 
    bekerja dengan Victoria's Secret, dan menjadi duta besar untuk kampanye iklan multimedia Estée Lauder's. Jenner membuat debutnya di No. 16 dalam daftar model berpenghasilan tertinggi oleh majalah Forbes.
    `
}

const chgDesc1 = () => {
    document.getElementById("descAboutMe").innerHTML = `Kendall Nicole Jenner (born November 3, 1995) is an American model and media personality. She is best known for her role in the reality television show 
    Keeping Up with the Kardashians. After working in commercial print ad campaigns and photoshoots, Jenner had breakout seasons in 2014 and 2015, 
    walking the runways for high-fashion designers during the New York, Milan, and Paris fashion weeks. Jenner has done multiple editorials and cover shoots for 
    LOVE and various international Vogue editions, and is a brand ambassador for Estée Lauder. Jenner made her debut at No. 16 on Forbes magazine's 2015 list of top-earning models, 
    with an estimated annual income of US$4 million. In 2017, Jenner was named the world's highest-paid model by Forbes.
`
}

const showEducation = () => {
    document.getElementById("title").innerHTML = `Educational Background`
    document.getElementById("description1").innerHTML = "2012 <br> Sierra Canyon School"
    document.getElementById("description2").innerHTML = "2015 <br> Laurel Springs School"
    document.getElementById("description3").innerHTML = "2019 <br> Modeling School LA"
}

const showExperiences = () => {
    document.getElementById("title").innerHTML = `Modeling Career`
    document.getElementById("icon1").innerHTML = `<img src="img/givenchy.jpg" alt="" class="mt-3" style="width: 60%">`
    document.getElementById("icon2").innerHTML = `<img src="img/versace.jpg" alt="" class="mt-3" style="width: 60%">`
    document.getElementById("icon3").innerHTML = `<img src="img/balmain.jpg" alt="" class="mt-3" style="width: 60%">`
    document.getElementById("description1").innerHTML = "Marc Jacobs A/W 2014"
    document.getElementById("description2").innerHTML = "Atelier Versace A/W 2015"
    document.getElementById("description3").innerHTML = "Balmain A/W 2016"
}

const showInterests = () => {
    document.getElementById("title").innerHTML = `Hobbies`
    document.getElementById("description1").innerHTML = "Sports – Walking, exercise, running, tennis, bicycling, swimming, etc"
    document.getElementById("description2").innerHTML = "Photography - Recording events and capturing memories"
    document.getElementById("description3").innerHTML = "Travelling - Going to different places instead of staying in one place"
}

const send = () => {
    let name = document.getElementById("name").value
    alert("Thank you " + name + " your message has been sent successfully")
    document.getElementById("name").value = ""
    document.getElementById("message").value = ""

}

