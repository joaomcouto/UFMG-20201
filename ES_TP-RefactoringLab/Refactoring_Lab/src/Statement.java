import java.util.Enumeration;

abstract class Statement {
	
	abstract String valueTop(Customer aCustomer);
	abstract String valueMid(Rental each);
	abstract String valueBottom(Customer aCustomer);
	
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
	   
	
}