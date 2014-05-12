package spring.test.sources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import bsh.This;

@Component
public class MessagePrinter {

	@Autowired
	private MessageService service;
	
	public void printMessage(){
		System.out.println(this.service.getMessage());
	}
	
}
