package com.linkedinsdk.test;
import java.util.EnumSet;
import java.util.List;
import com.google.code.linkedinapi.client.LinkedInApiClient;
import com.google.code.linkedinapi.client.LinkedInApiClientFactory;
import com.google.code.linkedinapi.client.enumeration.ProfileField;
import com.google.code.linkedinapi.schema.NameType;
import com.google.code.linkedinapi.schema.Person;
import com.google.code.linkedinapi.schema.Skill;
import com.google.code.linkedinapi.schema.Skills;

public class LinkedInPersonSkills {

	 private static final String API_KEY="77hda84grlnkrz";
	 private static final String API_KEY_SECRET="2Y04Y2fxQMsgDdNf";
	 private static final String ACC_TOKEN="3f40c383-2cdb-44c1-9dfa-97eee4102b83";
	 private static final String ACC_TOKEN_SECRET="da6f576a-0021-4641-9165-bd0036c366e0";
	
	  public static void main(String[] args)
	  {
		final LinkedInApiClientFactory factory = LinkedInApiClientFactory.newInstance(API_KEY,API_KEY_SECRET);
		final LinkedInApiClient client = factory.createLinkedInApiClient(ACC_TOKEN, ACC_TOKEN_SECRET);
		Person profile = client.getProfileForCurrentUser(EnumSet.of(
				ProfileField.FIRST_NAME, 
				ProfileField.LAST_NAME, 
				ProfileField.SKILLS));
		
		Skills skills= profile.getSkills();
		List<Skill> skillList= skills.getSkillList();	
		for(Skill sk: skillList){
			NameType nt = sk.getSkill();
			System.out.println(nt.getName());
		}
	  }
}