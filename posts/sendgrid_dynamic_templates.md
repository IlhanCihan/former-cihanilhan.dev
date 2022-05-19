---
title: 'SendGrid dynamic templates'
date: 'May 13, 2022'
excerpt: 'Sending mails with dynamic templates using SendGrid & PHP'
cover_image: '/images/posts/img2.jpg'
category: 'SendGrid'
category_image: '/images/languages/sendgrid.png'
---
<br/>
 If you already created your API Key for SendGrid there are few steps you should do before you can start mailing your clients with dynamic templates
Here are they as follows:
<br/><br/>

## Create your dynamic template
Go to [dynamic templates page](https://mc.sendgrid.com/dynamic-templates) and click on "Create a Dynamic Template". Here you can design your template after finishing it
you will have your templateID on dynamic templates page. Save that ID because we will be using it in our code
<br/><br/>

## Using your dynamic template with PHP

 Now you can asign your template to your mails
<br/>
Like this:
 ```php
    $email->setTemplateId("YOUR_TEMPLATE_ID");
```
<br/>
And here is  an example code on how to use it:

 ```php
    
    use SendGrid\Mail\From;
    use SendGrid\Mail\To;
    use SendGrid\Mail\Mail;


    $from = new From("ExampleEmail@gmail.com", "Example Sender");

    $tos = [
        new To(
            "ExampleReciver1@gmail.com",
            "Example User1",
            [
                'var' => '1',
            ]
        ),
        new To(
            "ExampleReciver2@gmail.com",
            "Example User2",
            [
                'var' => '2',
            ]
        )
    ];

    $email = new Mail(
        $from,
        $tos
    );

    $email->setTemplateId("YOUR_TEMPLATE_ID");

    $sendgrid = new \SendGrid( MAIL_API_KEY );
    try {
        $response = $sendgrid->send($email);
        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n";
    } catch (Exception $e) {
        echo 'Caught exception: '.  $e->getMessage(). "\n";
    }
```
