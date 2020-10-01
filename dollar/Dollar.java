package dollar;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class Dollar {
    int amount = 10;
    Dollar(int amount) {}			
    void times(int multiplier) {}
    
	public static void main(String[] args) {
		//System.out.println("Hello World");
		testMultiplication() ;
	}
	
	public static void testMultiplication() {
		   Dollar five = new Dollar(5);
		   five.times(2);
		   assertEquals(11, five.amount);
	}
}


