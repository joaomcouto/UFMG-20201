import java.util.Enumeration;

public class TextStatement extends Statement {
	
	public String value(Customer aCustomer) {
	  Enumeration rentals = aCustomer.getRentals(); 
	  String result = valueTop(aCustomer) ;		  
	  while (rentals.hasMoreElements()) {
	     Rental each = (Rental) rentals.nextElement(); 
	     //show figures for this rental
	     result += valueMid(each);
	  }
	  //add footer lines
	  result += valueBottom(aCustomer);
	  return result;
	}
	
	public String valueTop(Customer aCustomer){
		return "Rental Record for " + aCustomer.getName() + "\n";
	}
	
	public String valueMid(Rental each){
		return "\t" + each.getMovie().getTitle()+ "\t" +
			    String.valueOf(each.getCharge()) + "\n";
		
	}
	
	public String valueBottom(Customer aCustomer){
		return "Amount owed is " + String.valueOf(aCustomer.getTotalCharge()) + 
																		 "\n" +
																"You earned " +
				     String.valueOf(aCustomer.getTotalFrequentRenterPoints()) +
				                                     " frequent renter points";	
	}

}