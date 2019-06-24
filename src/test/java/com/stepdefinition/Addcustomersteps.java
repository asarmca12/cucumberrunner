package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class Addcustomersteps {
static WebDriver Driver;
	
	@Given("The user is in telecom home page")
	public void the_user_is_in_telecom_home_page() {
		System.setProperty("webdriver.chrome.driver","E:\\ProjectWorkspace\\cucumber22\\driver\\chromedriver.exe");
		Driver=new ChromeDriver();
		Driver.get("http://demo.guru99.com/telecom/");
		Driver.manage().window().maximize();
	   
	}

	@Given("The user click on add customer")
	public void the_user_click_on_add_customer() throws Throwable {
		  Driver.findElement(By.xpath("//a[text()='Add Customer'][1]")).click();
		   Thread.sleep(3000);
	}

	@When("The user filling all details")
	public void the_user_filling_all_details(DataTable customerdetails ) {
	   
		List<String> customerdetailsList = customerdetails.asList(String.class);
	   //System.out.println(customerdetailsList);
		Driver.findElement(By.xpath("//label[@for='done']")).click();
		 Driver.findElement(By.id("fname")).sendKeys(customerdetailsList.get(0));
		   Driver.findElement(By.id("lname")).sendKeys(customerdetailsList.get(1));
		   Driver.findElement(By.id("email")).sendKeys(customerdetailsList.get(2));
		   Driver.findElement(By.name("addr")).sendKeys(customerdetailsList.get(3));
		   Driver.findElement(By.name("telephoneno")).sendKeys(customerdetailsList.get(4));
	}

	@When("The user click on submit button")
	public void the_user_click_on_submit_button() {
		Driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("The user should be displayed id")
	public void the_user_should_be_displayed_id() {
		 Assert.assertTrue(Driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}
	@Given("The user click on add tariffplan")
	public void the_user_click_on_add_tariffplan() {
		Driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}
	

	@When("The user is filling all the tariff details {string},{string},{string},{string},{string},{string},{string}")
	public void the_user_is_filling_all_the_tariff_details(String monthrent, String freeloc, String freeintt, String smspack, String locchge, String intepermin, String smsper){
		//System.out.println("month rent");
		
		Driver.findElement(By.xpath("//input[@name='rental']")).sendKeys(monthrent);
		Driver.findElement(By.xpath("//input[@name='local_minutes']")).sendKeys(freeloc);
		Driver.findElement(By.xpath("//input[@name='inter_minutes']")).sendKeys(freeintt);
		Driver.findElement(By.xpath("//input[@name='sms_pack']")).sendKeys(smspack);
		Driver.findElement(By.xpath("//input[@name='minutes_charges']")).sendKeys(locchge);
		Driver.findElement(By.xpath("//input[@name='inter_charges']")).sendKeys(intepermin);
		Driver.findElement(By.xpath("//input[@name='sms_charges']")).sendKeys(smsper);
	}

	@When("The user click on tariff submit button")
	public void the_user_click_on_tariff_submit_button() {
		Driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("The user should be displayed congratulation you add Tariff Plan")
	public void the_user_should_be_displayed_congratulation_you_add_Tariff_Plan() {
		Assert.assertTrue(Driver.findElement(By.tagName("hr")).isDisplayed());
	}





}