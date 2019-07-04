$( document ).ready(function() {
    $("#submit").on("click", ()=>{

        console.log("yes i can see");
        let name = $("#name").val()
        let phone = $("#phone").val()
        let email = $("#email").val()
        let subject = $("#subject").val()
        let message = $("#message").val()
        Email.send({
            Host : "smtp.yourisp.com",
            Server : "smtp.elasticemail.com",
            Port : 2525,
            Username : "kanuamani@gmail.com",
            Password : "a9e7f7e2-68a9-48de-8546-525b3bd50e81",
            To : 'kanumani@gmail.com',
            From : email,
            Subject : subject,
            Body : message
        }).then(
          message => alert(message)
        )
    })
    ;});