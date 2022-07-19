import com.hashicorp.cdktf.Testing;
import com.mycompany.app.Main;
import com.hashicorp.cdktf.App;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import imports.docker.Container;
import imports.docker.DataDockerImage;
import imports.docker.DataDockerNetwork;
import imports.docker.Config;
import java.util.HashMap;

public class JunitTesting {

    private final App app = Testing.app();
    private final Main main = new Main(app, "main-valid");
    private final Main.MainInvalid mainInvalidTerraform = new Main.MainInvalid(app, "main-invalid");
    private final String synthesized = Testing.synth(main);
    private final String fullSynthesized = Testing.fullSynth(main);
    private final String fullSynthesizedInvalidTerraform = Testing.fullSynth(mainInvalidTerraform);

    @Test
    void hasResourcePass() {
        assertTrue(Testing.toHaveResource(synthesized, Container.TF_RESOURCE_TYPE).getPass());
    }

    @Test
    void hasResourceWithPropsPass() {
        assertTrue(Testing
                .toHaveResourceWithProperties(synthesized, Container.TF_RESOURCE_TYPE, new HashMap<String, Object>() {
                    {
                        put("dns_opts", new String[] { "1", "2", "3" });
                    }
                }).getPass());
    }

    @Test
    void hasResourceFail() {
        assertFalse(Testing.toHaveResource(synthesized, Config.TF_RESOURCE_TYPE).getPass());
    }

    @Test
    void hasResourceWithPropsFail() {
        assertFalse(Testing
                .toHaveResourceWithProperties(synthesized, Container.TF_RESOURCE_TYPE, new HashMap<String, Object>() {
                    {
                        put("dns_opts", new String[] { "11", "22", "33" });
                    }
                }).getPass());
    }

    @Test
    void hasDataPass() {
        assertTrue(Testing.toHaveDataSource(synthesized, DataDockerImage.TF_RESOURCE_TYPE).getPass());
    }

    @Test
    void hasDataWithPropsPass() {
        assertTrue(Testing.toHaveDataSourceWithProperties(synthesized, DataDockerImage.TF_RESOURCE_TYPE,
                new HashMap<String, Object>() {
                    {
                        put("name", "nginx:latest");
                    }
                }).getPass());
    }

    @Test
    void hasDataFail() {
        assertFalse(Testing.toHaveDataSource(synthesized, DataDockerNetwork.TF_RESOURCE_TYPE).getPass());
    }

    @Test
    void hasDataWithPropsFail() {
        assertFalse(Testing.toHaveDataSourceWithProperties(synthesized, DataDockerImage.TF_RESOURCE_TYPE,
                new HashMap<String, Object>() {
                    {
                        put("name", "wrong");
                    }
                }).getPass());
    }

    @Test
    void isValidTerrformPass() {
        assertTrue(Testing.toBeValidTerraform(fullSynthesized).getPass());
    }

    @Test
    void isValidTerrformFail() {
        assertFalse(Testing.toBeValidTerraform(fullSynthesizedInvalidTerraform).getPass());
    }

}