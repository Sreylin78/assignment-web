# Project Requirement

### In this project there are fews requirement like AOS, EmailJS, Swiper libraries. This readme contain the initialization of those libraries.

# AOS Libraries

#### CSS
```
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
```

#### javascript
```
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
```

#### Initialize AOS 
```
<script>
    AOS.init();
</script>
```

#### Add AOS Attributes to elements
```
<div data-aos="fade-up" data-aos-duration="1000">
    This element fades up with a 1-second duration.
</div>
```

# EmailJS Libraries

#### Setup EmailJS account
- Go to [emailjs.com](https://emailjs.com)
- create new email service
- add an email template

#### Add EmailJS to your project using CDN
```
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
```

#### initialize EmailJS 
```
<script>
    emailjs.init("YOUR_USER_ID");
</script>
```

#### Create an HTML form
```
<form id="contact-form">
...

</form>
```

#### Add JavaScript function to send emails
```
<script>
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Send the email
    emailjs.sendForm("serviceID", "templateID", this)
        .then(() => {
            alert('Email sent successfully!');
        }, (error) => {
            alert('Failed to send email. Try again later.');
            console.error(error);
        });
});
</script>
```

# Swiper Libraries

#### Add Swiper.js to your project using CDN
```
<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
```

#### Create HTML structure
```
<div class="swiper">
    <!-- Swiper Wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide"><div>
    </div>
</div>
</div>
```

####  Initialize Swiper
```
<script>
const swiper = new Swiper('.swiper', {

...

})
</script>
```