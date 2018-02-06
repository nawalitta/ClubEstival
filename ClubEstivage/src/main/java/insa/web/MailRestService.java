package insa.web;

import java.util.List;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.ClientRepository;
import insa.dao.VersementRepository;
import insa.entities.Client;
import insa.entities.Versement;

@RestController
@CrossOrigin("*")
public class MailRestService {

	

	@RequestMapping(value="/mail",method=RequestMethod.GET)
	public String sendMail(){
		
	      String to = "nawal.zakri@insa-cvl.fr";

	      String from = "hammou.zakri@gmail.com";

	      String host = "smtp.gmail.com";
	      Properties properties = System.getProperties();
	      properties.setProperty("mail.smtp.host", host);
	      properties.setProperty("mail.stmp.user", "hammou.zakri@gmail.com");
	      properties.setProperty("mail.smtp.password", "hammou123");
	      properties.setProperty("mail.smtp.port", "25");
	      properties.setProperty("mail.ssl", "true");
	      properties.setProperty("mail.smtp.auth", "true");
	      properties.setProperty("mail.smtp.starttls.enable", "true"); 
	      Session session = Session.getDefaultInstance(properties,
	    		    new Authenticator() {
	    		        protected PasswordAuthentication  getPasswordAuthentication() {
	    		        return new PasswordAuthentication(
	    		                    "hammou.zakri@gmail.com", "hammou123456");
	    		                }
	    		    });	      
	      try {
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(from));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
	    
	         // Set Subject: header field
	         message.setSubject("This is the Subject Line!");

	         // Now set the actual message
	         message.setText("This is actual message");

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	      } catch (MessagingException mex) {
	         mex.printStackTrace();
	      }		
			return "Sent message successfully" ;

	}
	
}
