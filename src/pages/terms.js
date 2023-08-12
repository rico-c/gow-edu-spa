import Footer from "../components/footer";
 
import Navbar from "../components/navbar";
import {useTranslation} from "react-i18next";

export const Terms = () => {
  const {t} = useTranslation("common");
  return (
    <>
       
      <Navbar />
      <div className="flex justify-center">
        <div class="w-5/6 md:w-1/2 pb-10">
          <div class="commontitle text-3xl text-bold main-color text-center pb-5">Terms and Conditions</div>

          <div class="terms">

            <div class="intro"><strong>Bright Happy Schools is a registered Trademark of Gow Learning
              International Pty Ltd ABN 34075850770. In using the Services provided by Bright Happy
              Schools (BHS), you unconditionally agree to the following terms and conditions.</strong>
            </div>

            <ol>

              <li className="pb-5">
                <strong>Privacy</strong>
                <p className="pb-5">Your privacy is very important to us so please read our <a href="/Home/Privacy">Privacy Policy</a>.</p>
              </li>


              <li className="pb-5">
                <strong>Sharing Your Content and Information</strong>

                <p className="pb-5">You own all of the content and information you post on BHS, and you can control how it is
                  shared through your Dashboard Settings. In addition: </p>

                <ol>

                  <li className="pb-5">
                    For content that is covered by intellectual property rights, like photos and videos
                    (IP content), you specifically give us a non-exclusive, transferable,
                    sub-licensable, royalty-free, worldwide license to use any IP content that you post
                    on or in connection with BHS. This IP License ceases when you delete your IP content
                    or your account unless your content has been shared with others, and they have not
                    deleted it.
                  </li>

                  <li className="pb-5">
                    When you delete IP content, you understand that removed content may persist in
                    backup copies for a reasonable period of time (but will not be available to others).
                  </li>

                  <li className="pb-5">
                    When you publish content or information using the Public setting, it means that you
                    are allowing everyone, to access and use that information, and to associate it with
                    you (ie. your name and profile picture).
                  </li>

                </ol>

              </li>


              <li className="pb-5">
                <strong>Safety</strong>

                <p className="pb-5">You agree that: </p>

                <ol>

                  <li className="pb-5">
                    You will not post unauthorised commercial communications (such as spam) on the BHS
                    network.
                  </li>
                  <li className="pb-5">
                    You will not collect users' content or information, or otherwise access the BHS
                    network, using automated means (such as harvesting bots, robots, spiders, or
                    scrapers) without our prior permission.
                  </li>
                  <li className="pb-5">
                    You will not engage in unlawful multi-level marketing, such as a pyramid scheme, on
                    the BHS network.
                  </li>
                  <li className="pb-5">
                    You will not upload viruses or other malicious code.
                  </li>
                  <li className="pb-5">
                    You will not solicit login information or access an account belonging to someone
                    else.
                  </li>
                  <li className="pb-5">
                    You will not bully, intimidate, or harass any user.
                  </li>
                  <li className="pb-5">
                    You will not post content that: is hate speech, threatening, or pornographic;
                    incites violence; or contains nudity or graphic or gratuitous violence.
                  </li>
                  <li className="pb-5">
                    You will not use the BHS network to do anything unlawful, misleading, malicious, or
                    discriminatory.
                  </li>
                  <li className="pb-5">
                    You will not do anything that could disable, overburden, or impair the proper
                    working or appearance of the BHS network, such as a denial of service attack or
                    interference with page rendering or other BHS functionality.
                  </li>
                  <li className="pb-5">
                    You will not facilitate or encourage any violations of these Terms and Conditions or
                    our policies.
                  </li>

                </ol>

              </li>

              <li className="pb-5">
                <strong>Registration and Account Security</strong>

                <p className="pb-5">You agree that: </p>

                <ol>

                  <li className="pb-5">
                    You will not provide any false personal information on the BHS network, or create an
                    account for anyone other than yourself without permission.
                  </li>

                  <li className="pb-5">
                    If we disable your account, you will not create another one without our permission.
                  </li>

                  <li className="pb-5">
                    You will not use the BHS network if you are under 13.
                  </li>

                  <li className="pb-5">
                    You will not use the BHS network if you are a convicted sex offender.
                  </li>

                  <li className="pb-5">
                    You will keep your contact information accurate and up-to-date.
                  </li>

                  <li className="pb-5">
                    You will not share your password let anyone else access your account, or do anything
                    else that might jeopardize the security of your account.
                  </li>

                </ol>
              </li>

              <li className="pb-5">
                <strong>Protecting Other People's Rights</strong>

                <p className="pb-5">You agree that: </p>

                <ol>
                  <li className="pb-5">
                    You will not post content or take any action on the BHS network that infringes or
                    violates someone else's rights or otherwise violates the law.
                  </li>
                  <li className="pb-5">
                    We can remove any content or information you post on the BHS network if we believe
                    that it violates this Statement or our policies.
                  </li>
                  <li className="pb-5">
                    If we remove your content for infringing someone else's copyright, and you believe
                    we removed it by mistake, we will provide you with an opportunity to appeal.
                  </li>
                  <li className="pb-5">
                    If you repeatedly infringe other people's intellectual property rights, we will
                    disable your account when appropriate.
                  </li>
                  <li className="pb-5">
                    You will not use our copyrights or Trademarks or any confusingly similar marks,
                    without our prior written permission.
                  </li>
                  <li className="pb-5">
                    If you collect information from users, you will: obtain their consent, make it clear
                    you (and not BHS) are the one collecting their information, and post a privacy
                    policy explaining what information you collect and how you will use it.
                  </li>
                  <li className="pb-5">
                    You will not post anyone's identification documents or sensitive financial
                    information on the BHS network.
                  </li>
                </ol>

              </li>

              <li className="pb-5">
                <strong>Payments &amp; Delivery</strong>

                <p className="pb-5">
                  You must be 18 years old or older to purchase products or services developed by BHS. If
                  you are under 18 years old you must do so only with the involvement of your parent or
                  guardian. If you purchase products or services developed by BHS, you will be given
                  numerous options by which to pay. In the case of on-line content supplied by BHS, upon
                  successful processing of the financial transaction, you will be given access to the
                  Service via the BHS network, accessible by your own password. Confirmation of payment
                  will be sent to your nominated e-mail address. In the case of physical products supplied
                  by BHS upon successful processing of the financial transaction, you will be sent the
                  product via our nominated courier service within three (3) business working days. If the
                  product is out of stock, an emailing confirming this will be sent to your nominated
                  e-mail address outlining the options available to you, including placing the order on
                  back order or cancelling the order and obtaining a refund. Confirmation of payment will
                  be sent to your nominated e-mail address.
                </p>

                <p className="pb-5">
                  <u>If you purchase products or services via our marketing affiliates</u>, you
                  acknowledge that the products or services you may purchase are sold by merchants, not by
                  BHS. WE MAKE NO WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, WITH RESPECT TO ANY PRODUCTS
                  OR SERVICES SOLD ON OR THROUGH BHS THROUGH OUR MARKETING AFFILIATES. We do not take any
                  responsibility for any products or service purchased through an affiliate marketing
                  program linked to the BHS network. Any questions regarding product or service delivery
                  or returns must be directed to the supplier, and not BHS. Product delivery will be in
                  line with each individual merchant’s terms and conditions which are not related in any
                  way with the operations of BHS.
                </p>

              </li>

              <li className="pb-5">
                <strong>Discontinuity of Delivery</strong>
                <p className="pb-5">
                  All material generated by BHS is sent to you in an electronic form. In providing you
                  with free content such as newsletters, we advise that this service may be terminated at
                  any time, with or without notice. Given this is a free service, BHS will not be liable
                  for any discontinuity of service. In providing you with paid content, such as our
                  programs delivered to you electronically, there may be situations outside our control
                  where content is not able to be delivered to you, such as a network failure. In this
                  instance, BKH will refund to the original credit card which was used in paying for the
                  program, a pro-rated payment portion of any undelivered program.
                </p>
              </li>

              <li className="pb-5">
                <strong>Refunds</strong>
                <p className="pb-5">
                  <strong>For on-line services provided by BHS (including on-line programs and other
                    on-line resources)</strong>. There is no refund of payment for any on-line service
                  provided by BHS. The only exception to this is where you can prove that the on-line
                  programs or other on-line resources were not delivered. If not delivered, you must
                  contact BHS either by telephone or e-mail within 7 days of purchase and provide your Tax
                  Invoice number, which will be compared against our records. If a fault has been made by
                  BHS, then a full refund will be made to your nominated credit card.
                </p>

                <p className="pb-5">
                  <strong>For physical products supplied by BHS</strong>. If the product supplied by BHS
                  is faulty or damaged, within the first 14 days after purchasing the item from BHS, you
                  must contact BHS by e-mailing us on returns@brighthappyschools.com and obtain a RETURNS
                  SLIP with an approved RETURNS NUMBER. You agree to send the faulty or damaged item at
                  your expense to BHS, along with the RETURNS SLIP with an approved RETURNS NUMBER. Once
                  the product has been received, depending on your instructions, we will refund the money
                  you paid for the item back to the credit card you used for the original purchase. Please
                  note - requests for refunds received more than 14 days after purchase will not be
                  processed.
                </p>

                <p className="pb-5">
                  <strong>For physical products or on-line services supplied by one of our marketing
                    affiliates</strong>. <u>If you purchase products or services via one or more of our
                      marketing affiliates</u>, you acknowledge that the products or services you may
                  purchase are sold by merchants, not by BHS. WE MAKE NO WARRANTIES OF ANY KIND, EXPRESS
                  OR IMPLIED, WITH RESPECT TO ANY PRODUCTS OR SERVICES SOLD ON OR THROUGH BHS THROUGH OUR
                  MARKETING AFFILIATES. We do not take any responsibility for any products or service
                  purchased through an affiliate marketing program linked to the BHS network. If the
                  product or service you purchase from a marketing affiliate is faulty or damaged, you
                  should contact the marketing affiliate and follow their refund processes.

                </p>

              </li>
            </ol>

            <p className="pb-5">Version date: May 27th, 2016</p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

