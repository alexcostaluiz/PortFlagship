<!-- Contact content container -->
<div class="container light-grey">
  <div class="row pad64 padNoBottom bottom32">
    <span class="content-title clearboth">Contact Us</span>
  </div>
  <div class="divider bottom32"></div>
  <div class="row-flex bottom32">
    <div class="four columns">
      <div class="content-text-container padNone">
        <span class="content-paragraph">
          If you are interested in knowing more about the Portuguese Flagship Program, contact us below!
          We’ll answer your questions the best that we can and give you the information you need. You will
          receive a confirmation email upon submission.
        </span>
      </div>
    </div>
  </div>
  <div class="row-flex">
    <div class="four columns" style="text-align: center">
      <form id="contact-form" class="bottom64" style="position: relative" method="post" onsubmit="return validateContactForm()">
        <div class="contact-input-container">
          <span class="contact-header clearboth left">Name</span>
          <input class="contact-input" type="text" name="name" required>
        </div>
        <br><br>
        <div class="contact-input-container">
          <span class="contact-header clearboth left">Email</span>
          <input class="contact-input" type="email" name="email" required>
        </div>
        <br><br>
        <div class="contact-input-container">
          <span class="contact-header clearboth left">Subject</span>
          <input class="contact-input" type="text" name="subject" required>
        </div>
        <br><br>
        <span class="contact-header clearboth left">Message</span>
        <textarea class="contact-textarea" name="message" placeholder="Comments or questions are welcome!" required></textarea>
        <br><br>
        <div class="g-recaptcha" data-sitekey="6Lfx0n4UAAAAAAUMFSxmZUzIuCPsrJVo7bHLx1Vl" style="display: inline-block"></div>
        <br><br>
        <button type="submit" name="submit" class="content-button invert">Submit</button>
      </form>
    </div>
  </div>
</div>
