$( document ).ready(function() {
    $(".contact").css({
        backgroundColor: "rgb(252,114,30)",
        color: "black",
        borderRadius: "10px",
        padding: "8px"
      })
    form = $("#form-submit")
    form.submit( (e)=>{
        console.log("yes i can see");
        let name = $("#name").val()
        let phone = $("#phone").val()
        let email = $("#email").val()
        let subject = $("#subject").val()
        let message = $("#message").val()
        body ={
            
            name,
            phone,
            email,
            subject,
            message
        }
        console.log(body)

        if(!name|| !phone || !email || !subject){
            alert("please check your entries")
        }else{
            $.ajax({
                url: "https://formspree.io/kanuamani@gmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json",
            })
            e.preventDefault()
            alert(name+" your message has been sent successfully, thank you for getting in touch with me")
            form.trigger("reset");
        }
        // Email.send({
        //     Host : "smtp.yourisp.com",
        //     Server : "smtp.elasticemail.com",
        //     Port : 2525,
        //     Username : "kanuamani@gmail.com",
        //     Password : "a9e7f7e2-68a9-48de-8546-525b3bd50e81",
        //     To : 'kanumani@gmail.com',
        //     From : email,
        //     Subject : subject,
        //     Body : message
        // }).then(
        //   message => alert(message)
        // )
    })
    ;});