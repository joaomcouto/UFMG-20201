import java.util.Enumeration;

public class HtmlStatement extends Statement {
	
   public String value(Customer aCustomer) {
      Enumeration rentals = aCustomer.getRentals(); 
      String result = valueTop(aCustomer);
      while (rentals.hasMoreElements()) {
         Rental each = (Rental) rentals.nextElement(); 
         //show figures for each rental
         result += valueMid(each);
      }
      //add footer lines
      result += valueBottom(aCustomer);
      return result;
   }
   
	public String valueTop(Customer aCustomer){
		return "<H1>Rentals for <EM>" + aCustomer.getName() + 
										 "</EM></H1><P>\n";
	}
	
	public String valueMid(Rental each){
		return each.getMovie().getTitle()+ ": " +
		       String.valueOf(each.getCharge()) + 
		       							"<BR>\n";
		
	}
	
	public String valueBottom(Customer aCustomer){
		return	"<P>You owe <EM>" + String.valueOf(aCustomer.getTotalCharge()) + 
																  "</EM><P>\n" +
			      							  "On this rental you earned <EM>" + 
			      	  String.valueOf(aCustomer.getTotalFrequentRenterPoints()) +
			                                  "</EM> frequent renter points<P>";
	}

}