import React from "react";
import { useNavigate } from "react-router-dom";

const bgUrl =
  "https://cdn.discordapp.com/attachments/861844344822431754/1384191805624418334/bg.jpg?ex=68518893&is=68503713&hm=3d693189fa7f4c06223f7d86bd5bfb741694fe787905eef7bfd02069f97145e7&";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Blurred Background Image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "auto",
          height: "auto",
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: 800,
            margin: "2rem auto",
            padding: "2rem",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Terms & Conditions</h1>
          <p>
            <strong>TERMS AND CONDITIONS</strong><br />
            These Terms and Conditions are current as to January 2024. We update our Terms and Conditions from time to time, and we advise you to check any changes since the last time you used the services offered through this site (the "Site").
          </p>
          <p>
            Users of the Site comprise Offeror Users and Recipient Users, as defined below (together “Users”).
          </p>
          <p>
            Offeror Users create content displayed on the Site and are entitled to upload advertisements for free or paid (in accordance with the section Paid Services: Offeror Users below) and create profiles with or without registration.
          </p>
          <p>
            Recipient Users have access to content placed by Offeror Users and are given the opportunity to contact Offeror Users via the contact details provided by such Offeror Users, without any intervention of the platform administrators.
          </p>
          <p>
            If Users browse the Site signifies consent to the Terms and Conditions current at the time when they visit the Site and that if they do not wish to be bound by the Terms and Conditions they have to close the Site and cease to use the service.
          </p>
          <p>
            Our collection, use, disclosure and other processing of your personal data is governed by our Privacy Policy which also sets out our use of cookies and similar technology. We only gather the minimum personal data which is necessary for us to provide the Service in accordance with these Terms and Conditions, to comply with legal obligations on us, and to fulfil our legitimate interests with respect to improving the Service, extending the geographic coverage of the Service and promoting the safety and well-being of our Users.
          </p>
          <p>
            To become an Offeror User, you need to confirm the Terms and Conditions including the Acceptable Use Policy and Summary and Guidelines set out below at the time of placing your ads or creating that profile.
          </p>
          <p>
            Please note that this Site is aimed strictly at adults (over 18 or any higher age of majority in your country of residence) and by using the Site Users warrant that are over 18 years or any applicable higher age of majority in your country of residence and that in addition in the case of Offeror Users that you are not offering any services through the Site which contravene applicable local law in your jurisdiction. Be aware that this Site acts as a platform provider and may apply editorial control or pre-vet advertisements placed with us or User profiles created on the Site. We reserve the right to take down advertisements or profiles which:
          </p>
          <ul>
            <li>contravene these Terms and Conditions; or</li>
            <li>contravene local law in your jurisdiction; or</li>
            <li>contain any malware or any other material which risks interfering with or degrading the proper performance of the Site; or</li>
            <li>we consider in our absolute discretion to be prejudicial to the proper performance of the Service; or</li>
            <li>we consider are or may be in breach of any applicable laws or regulations binding on us and/or Users; or</li>
            <li>constitute or may constitute harassment or bullying of any other User or other third party; or</li>
            <li>are threatening, abusive or discriminatory or similar.</li>
          </ul>
          <p>
            We have instituted a "Report this Ad" function on the Site which permits Users to report to us advertisements which they consider contravene these Terms and Conditions, including any advertisement which in their opinion contain,
          </p>
          <ul>
            <li>underage content;</li>
            <li>have not been published by or with the informed and voluntary consent of the person included within them; or</li>
            <li>are otherwise illegal.</li>
          </ul>
          <p>
            We will review all advertisements which are reported to us and may either uphold the complaint and remove the advertisement, require the Offeror User who placed the advertisement to provide additional material verifying their age or the right to place the advertisement as the case may be or reject the complaint.
          </p>
          <p>
            If we request any further assistance or information from a User in relation to a complaint, you must, as soon as practically possible, provide all assistance and information reasonably requested. You also acknowledge that we may remove any content where required or requested to do so by any regulatory or supervisory authority.
          </p>
          <p>
            Please visit the section named Acceptable Use Policy and Summary and Guidelines to have further information about the material which is considered to contravene these Terms and Conditions, although it is for Users in each case to determine for themselves the laws applicable to any material contributed by them to the Site and such material's compliance with the Terms and Conditions.
          </p>
          <p>
            Users who breach these Terms and Conditions for serious reasons or repeatedly will be banned. In the event of taking down any advertisement or banning any User we will not, in any circumstances, be responsible for any losses, claims, damages or expenses whatsoever arising out of such take down or ban, and no refunds for any money paid to us will be granted.
          </p>
          <p>
            By ticking the “Accept” button when making a post on the Site, the User has agreed that they authorise us to process and publish their photograph for the purpose of publishing an advertisement on the Site and that the User authorises us to process special categories of their personal data (including information that may relate to their lifestyle and sexual behaviour) for the purpose of publishing an advertisement on the Site.
          </p>
          <h2>Obligations and Behaviour</h2>
          <p>
            Access to the portal is exclusively intended for individuals over 18 years old. Based on the new requirements from payment service providers, we are obligated to verify the age of Users who post content on the Website. In this regard, through an identity verification service provider or KYC ("Know Your Customer") that ensures a high level of confidentiality and security, Users wishing to publish ads on the Website will be required to complete an identity and age verification process. This process includes verifying the identification document, such as the National Identity Document, Passport, or another identifying document issued by the corresponding country.
          </p>
          <p>
            Registration will be denied to Users or the accounts of Users who, having completed the age verification process:
          </p>
          <ul>
            <li>Are under 18 years of age;</li>
            <li>The data provided during registration does not match the data on the identification document or it is found that none of them belong to the User who effectively carried out the registration;</li>
            <li>It has not been possible to verify and/or validate their identity and age convincingly through the enabled means;</li>
            <li>The information, data, and/or documents provided show signs of being untrue, inaccurate, outdated, altered, modified, or fraudulent;</li>
          </ul>
          <p>
            Likewise, we reserve the right, at any time after registration, to deactivate, without prior notice and immediately, those users who, given their circumstances, do not meet or there are indications that they do not meet the identity or age requirements necessary to be a registered user on the website and to publish content on it.
          </p>
          <p>
            Users are informed about the existence of mechanisms created by third parties and available through the Internet, in particular, filtering and blocking software programs, which allow limiting the available contents, and although they are not infallible, they are especially useful for controlling and restricting the materials that minors can access.
          </p>
          <p>
            Recipient Users should be aware that we do not exercise advance control over the content of the online ads placed by Offeror Users. The Site is not an intermediary or agent of any Users and is not in any respect responsible for any risks, claims or liabilities arising out of any subsequent supply of services or other connection between any Offeror User(s) and any Recipient User(s).
          </p>
          <p>
            By using the Service, Users are taking the full and exclusive responsibility for their behaviour towards the Site and towards third parties including but not limited to other Users.
          </p>
          <p>
            We are not responsible for the veracity of the content posted by Offeror Users, or the successful outcome of any negotiations between any Offeror User(s) and any Recipient User(s), neither responsible if they are against decency and morality or if they are violating any copyrights.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            Nothing in these Terms of Use applies to limit or exclude any liability of any party for death or personal injury caused by that person’s negligence or any person for whom they are responsible, or for fraud, or for any other liability which may not be excluded or limited by law.
          </p>
          <p>
            The Site and its affiliates, managers, employees, officers or directors do not accept any liability for:
          </p>
          <ul>
            <li>any loss or damage to the extent it arises from circumstances outside their reasonable control;</li>
            <li>any loss or damage caused by any interruption in or non-availability of the Site or the Service;</li>
            <li>any direct or indirect loss of profits, business, reputation, anticipated savings or turnover;</li>
            <li>any loss or corruption of data;</li>
            <li>any indirect, special, punitive, statutory or consequential losses whatsoever even if it has been advised of the possibility of such losses.</li>
          </ul>
          <p>
            The Site's and its affiliates', and its or their affiliates, managers, employees, officers or directors' liability to Users for any other losses and damages, whether arising in contract, tort, breach of statutory duty or under any legal theory whatsoever arising out of or in connection with the Site and the Services shall, (without prejudice to the section Complaints and Refunds Policy below) in the case of Paid For Services, be capped at an amount equivalent to the higher of the sums paid by any User in the twelve months immediately prior to the event giving rise to the claim or EUR 400.- and in the case of any other Services, EUR 100.-
          </p>
          <p>
            Each of the above provisions and sub-provisions are separate and independent provisions and a finding of nullity or unenforceability in respect of one provision or sub-provision shall not affect the enforceability of the other provisions and sub-provisions which will remain in full force and effect.
          </p>
          <h2>Paid Services: Offeror Users</h2>
          <p>
            By publishing an advertisement on the Site, which may or not include creating an online profile, each Offeror User is authorising us to promote it for its greater visibility in order to obtain more contacts. By creating an online profile or placing an advertisement on the Site, Offeror Users confirm they are of legal age in the relevant jurisdiction, that they are the person identified in that profile and that they have not been coerced in any way to offer services or to create the online profile or place the advertisement.
          </p>
          <p>
            Offeror Users are made aware that we accept payments for services through specific payment service providers whose terms and conditions govern transactions between Offeror Users and who act as independent service providers in this regard. We are not responsible for acts, omissions, or mistakes of the payment providers. In the event of breach of these Terms and Conditions, we reserve the right to take down the advertisement without refund to delete any applicable profile and to ban Users from creating any future profiles or placing any future advertisements.
          </p>
          <h2>Acceptable Use Policy</h2>
          <p>
            Users undertake not to use the Service provided by the Site either improperly or contrary to the provisions of law, rules of ethics and good conduct of the network services. Users, in particular, undertake not to transmit through the Site material of offensive and libellous nature, discriminatory, harassing, defamatory, pornographic, paedophile, vulgar, blasphemous or which is some way contrary to the principles of public order and good morals.
          </p>
          <p>
            Offeror Users are responsible for complying with all applicable laws with respect to the content of their advertisement. In particular, Users must not advertise any services which it would be unlawful to perform within their jurisdiction and they must not include any material which would contravene the provisions relating to "extreme pornography".
          </p>
          <p>
            Offeror Users warrant that they are the data subjects of or that they have the explicit, voluntary and informed consent of all persons whose personal data or photo is included in any advertisement placed by them and that they will not use any material in their advertisements which contravenes the copyright or other intellectual property rights of any third person without having the permission of that third person.
          </p>
          <p>
            Placing advertisements purporting to be of or from someone or including the data or photos of someone who has not consented to those advertisements being placed is a serious breach of these Terms and Conditions and may lead to accounts being closed and Offeror Users banned from the Site.
          </p>
          <p>
            Offeror Users are aware that by including an email address in advertisements hosted by the Site, we have no control over any materials which may be sent directly to that email address, whether by other Users or otherwise, and whether in answer to that advertisement.
          </p>
          <h2>Summary and Guidelines</h2>
          <p>
            Offeror Users have their specific attention drawn to the following summary of the above Terms and Conditions. For the avoidance of doubt, we offer this summary as a convenience to our Users and should not be taken to constitute legal advice as to when material is lawful to include in advertisements and profiles.
          </p>
          <ul>
            <li>Any material which includes or promotes or depicts suicide or self-harm is not permitted;</li>
            <li>Any material which contains blasphemy;</li>
            <li>Any material which may be considered "extreme pornography" or “abhorrent violent conduct” or material, including material which depicts rape, sexualised violence or acts which appear to be non-consensual, which appears to involve animals, which appears to involve sexual acts with dead bodies, or which depicts acts which appear to threaten a person's life or acts which result, or are likely to result, in serious injury to a person's anus, breasts or genitals are not allowed;</li>
            <li>Any material which makes use without each participant's knowledge and consent of intimate or erotic material provided on private occasions ("revenge porn") is not allowed;</li>
            <li>Any material which depicts, promotes, implies, induces or offers sexual activity with or by minors, child pornography, child abuse material and/or child exploitation material, including any sexualised content depicting or describing persons that appear to be under 18 years or age or which otherwise promotes, depicts, implies or encourages paedophilia ("paedopornographic material") is not allowed, this includes any virtual (including photoshopped), animated, computer generated or cartoon depictions;</li>
            <li>The insertion into any advertisement or profile of paedopornographic material will be immediately reported to the competent Authorities, including all the access and metadata. We also reserve the right to report material which contravenes our rules on extreme pornography, abhorrent violent conduct or revenge pornography.</li>
            <li>Any material portraying or purporting to portray third parties who have not consented to that use or publication is not allowed;</li>
            <li>By placing advertisements or creating profiles, Users certify that they have full legal rights to do so, and also declare and warrant that the material uploaded belongs to persons of legal age (over 18 or any higher age of majority in their country of residence) which have given their free and informed consent to publish them on the Site for adult dating purposes and who are not being coerced or pressured in any way to participate. Unless the Offeror User gives this confirmation also clicking accept on the disclaimer, they will not be able to publish their advertisement or make use of the service.</li>
            <li>It is permitted to publish the same advertisement in a maximum of two different cities;</li>
            <li>It is not permitted to repeat the same advertisement in the same city during the same time period;</li>
            <li>It is not permitted to include hypertext links in any advertisement or profile;</li>
            <li>On uploaded images, our logo will be added as a watermark.</li>
          </ul>
          <p>
            It is strongly prohibited to use this Website in any way that promotes or facilitates human trafficking, sex trafficking or physical abuse. Offeror Users may not upload, post, display, or publish material that constitutes hate speech, is discriminatory, threatening menacing, humiliating, offensive or harassing, or which encourages or promotes violence, that counsels or incites suicide, is an act of cyberbullying, cyberstalking or stalking or which would constitute criminal offences under legislation relating to child sexual exploitation, torture, assault, death, terrorism or racism or xenophobia. For these purposes “hate speech” includes material directed to a group or individual based on race, ethnicity, national origin, immigration status, caste, religion, sex, gender identity or expression, sexual orientation, age, disability, or any other protected characteristic and which is intended or has the effect of or is likely to have the effect of inciting discrimination, hatred, fear of, or violence against such group or individual.
          </p>
          <p>
            The following are non-exhaustive examples of behaviour or material which is prohibited because considered to be threatening or harassing:
          </p>
          <ul>
            <li>is or appears to be targeted at a specific individual or group of individuals and is offensive, derogatory, or harassing;</li>
            <li>is used or appears to be intended to be used to extract money or another benefit from anyone else in exchange for removal of the content;</li>
            <li>contains unsolicited sexual content or unsolicited language that sexually objectifies another User or anyone else in a non-consensual way;</li>
            <li>identifies a User or other third party or includes material which could be used for such purposes such as employer details, telephone numbers, financial details, location information, names, identity documents, email addresses, log-in credentials or any other personally identifiable information without that person's express written consent.</li>
          </ul>
          <p>
            Users may not use the Site to promote illegal trading, Ponzi or pyramid schemes or to engage in misleading or deceptive conduct, or conduct that is likely to mislead or deceive any other User or which implies, contrary to the fact, that any person or organisation endorses that User or their content or that they are acting as a brand ambassador or representative of any person or organisation.
          </p>
          <p>
            The Site will take down any material which it knows or has reason to believe contravenes any of the above. If you wish to report any material on the Site which you believe contravenes any of the above contact us via the support email provided on our site.
          </p>
          <p>
            If an individual has been portrayed in any content, they possess the right to request the removal of said content. Please send your notification of claimed infringement to the support email provided on our site.
          </p>
          <p>
            We will review and address your concerns accordingly within 7 business days. Upon triggering an appeal, we will verify the consent obtained.
          </p>
          <p>
            If consent cannot be confirmed or if the person demonstrates that consent is void under the law, we will promptly remove the content.
          </p>
          <p>
            In case of disagreement on the validity of consent under the law, we will allow resolution by a neutral body.
          </p>
          <p>
            We operate the service following the prescriptions ruled by these terms and conditions, governed by and interpreted in accordance with local law and are subject to the exclusive jurisdiction of the local Courts.
          </p>
          <p>
            [Your Company Name/Address Here]
          </p>
          <h2>Complaints and Refunds Policy</h2>
          <p>
            We do not refund money paid for Paid Services to Offeror Users but may exceptionally and at our sole discretion offer credit for money paid and unused to be used against future Paid Services. In particular (but without limitation) we reserve the right to intervene via the Site or to make any modifications or changes in the Site, without prior notification, or to limit the Offeror User’s access to the Site due to maintenance or technical or other reasons for a necessary period of time without prior notification. In such cases, no Offeror User is entitled to claim any compensation or refund pursuant to this policy based on such modification, changes or non-availability.
          </p>
          <p>
            If our payment provider receives a request from a financial institution or a platform to refund any financial amount spent on purchases of Paid Services, we reserve the right to block the Offeror User’s Profile upon the receipt of such request until we are informed by the payment provider that the issue has been fully resolved to the satisfaction of the payment provider and/or the financial institution or platform.
          </p>
          <p>
            Please note that we are not responsible for any type of loss, damage, or inconvenience that users may attain as a result of using our website or services. All interactions and transactions are at your own risk.
          </p>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              onClick={() => navigate("/")}
              style={{
                background: "linear-gradient(90deg, #007bff 60%, #25D366 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "22px",
                padding: "0.65rem 1.6rem",
                fontWeight: 600,
                fontSize: "1.08rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                cursor: "pointer",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
           </div>
    </div>
  );
}