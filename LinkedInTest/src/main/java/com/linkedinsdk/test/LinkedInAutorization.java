package com.linkedinsdk.test;

import java.util.Scanner;

import org.scribe.builder.ServiceBuilder;
import org.scribe.model.Token;
import org.scribe.model.Verifier;
import org.scribe.oauth.OAuthService;
import org.scribe.builder.api.LinkedInApi;

public class LinkedInAutorization {
	 //private static final String PROTECTED_RESOURCE_URL = "http://api.linkedin.com/v1/people/~/connections:(id,last-name)";
	 //private static final String USER_SKILLS = "http://api.linkedin.com/v1/people/~:(skills)";
	private static final String API_KEY = "77hda84grlnkrz";
	private static final String API_KEY_SECRET = "2Y04Y2fxQMsgDdNf";

	public static void main(String[] args) {
		
		OAuthService service = new ServiceBuilder().provider(LinkedInApi.class)
				.apiKey(API_KEY).apiSecret(API_KEY_SECRET).build();
		Scanner in = new Scanner(System.in);
		
		// Obtain the Request Token
		System.out.println("Fetching the Request Token...");
		Token requestToken = service.getRequestToken();
		System.out.println("Got the Request Token!");
		System.out.println("REQUEST TOKEN -------> " + requestToken);
		System.out.println("Now go and authorize Scribe here:");
		System.out.println(service.getAuthorizationUrl(requestToken));
		System.out.println("And paste the verifier here");
		System.out.print(">>");
		Verifier verifier = new Verifier(in.nextLine());
		System.out.println();

		// Trade the Request Token and Verfier for the Access Token
		System.out.println("Trading the Request Token for an Access Token...");
		Token accessToken = service.getAccessToken(requestToken, verifier);
		System.out.println("Got the Access Token!");
		System.out.println("(if your curious it looks like this: "
				+ accessToken + " )");
		System.out.println();
		
		
		//System.out.println("Now we're going to access a protected resource...");
//	    OAuthRequest request = new OAuthRequest(Verb.GET, USER_SKILLS);
//	    service.signRequest(accessToken, request);
//	    Response response = request.send();
//	    System.out.println("Got it! Lets see what we found...");
//	    System.out.println();
//	    System.out.println(response.getBody());
	}

}
