import com.hashicorp.cdktf.Testing;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

// The tests below are example tests, you can find more information at
// https://cdk.tf/testing
public class MainTest {

    @Test
    void myAppTest() {
        assertTrue(true);
    }
    //private final TerraformStack stack = new TerraformStack(Testing.app(), "stack");
    
    //private final MyApplicationsAbstraction appAbstraction = new MyApplicationsAbstraction(stack, "resource");
    //private final String synthesized = Testing.synth(stack);

    //@Test
    //void shouldContainContainer() {
    //    assertTrue(Testing.toHaveResource(synthesized, Container.TF_RESOURCE_TYPE) );
    //}

    //@Test
    //void shouldUseUbuntuImage() {
    //    assertTrue(Testing
    //            .toHaveResourceWithProperties(synthesized, Image.TF_RESOURCE_TYPE, new HashMap<String, Object>() {
    //                {
    //                    put("name", "ubuntu:latest");
    //                }
    //            }) );
    //}

    //@Test
    //void checkValidity() {
    //    assertTrue(Testing.toBeValidTerraform(Testing.fullSynth(stack)) );
    //}

}