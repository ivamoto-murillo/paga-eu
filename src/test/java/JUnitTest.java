import org.junit.Test;
import static org.junit.Assert.*;

/*
 * This Java source file was auto generated by running 'gradle init --type java-library'
 * by 'murillo.ivamoto' at '18/08/15 09:38' with Gradle 2.6
 *
 * @author murillo.ivamoto, @date 18/08/15 09:38
 */
public class JUnitTest {
	
    @Test public void testJUnit() {
    	String utWorking = "Unity test working!";
    	
        System.out.println(utWorking);
        
        assertSame("Same Strings!", "Unity test working!", utWorking);
    }
    
}