// DOCS_BLOCK_START:unit-tests
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;
import com.hashicorp.cdktf.Testing;
import imports.docker.Container;
import imports.docker.Image;
import com.hashicorp.cdktf.MyApplicationsAbstraction; // Could be a class extending from Construct

public class TestApplication {

  private final TerraformStack stack = new TerraformStack(Testing.app(), "stack");
  private final MyApplicationsAbstraction appAbstraction = new MyApplicationsAbstraction(stack, "resource");
  private final String synthesized = Testing.synth(stack);

  @Test
  void shouldContainContainer() {
    assertTrue(Testing.toHaveResource(synthesized, Container.TF_RESOURCE_TYPE) );
  }

  @Test
  void shouldUseUbuntuImage() {
    assertTrue(Testing.toHaveResourceWithProperties(synthesized, Image.TF_RESOURCE_TYPE, new HashMap<String, Object>() {
                {
                    put("name", "ubuntu:latest");
                }
    }) );
  }
}
// DOCS_BLOCK_END:unit-tests