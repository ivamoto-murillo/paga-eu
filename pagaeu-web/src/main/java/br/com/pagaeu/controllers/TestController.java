package br.com.pagaeu.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="test")
public class TestController {

    @RequestMapping(value="testUser")
    public void testUser() {
        System.out.println("");
    }
    
}
