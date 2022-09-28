import com.hashicorp.cdktf.Testing;
import com.mycompany.app.Main;
import com.hashicorp.cdktf.App;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import imports.docker.container.Container;
import imports.docker.data_docker_image.DataDockerImage;
import imports.docker.data_docker_network.DataDockerNetwork;
import imports.docker.config.Config;
import java.util.HashMap;

public class MainTest {

    private final App app = Testing.app();
    private final Main main = new Main(app, "main-valid");
    private final Main.MainInvalid mainInvalidTerraform = new Main.MainInvalid(app, "main-invalid");
    private final String synthesized = Testing.synth(main);
    private final String fullSynthesized = Testing.fullSynth(main);
    private final String fullSynthesizedInvalidTerraform = Testing.fullSynth(mainInvalidTerraform);

    @Test
    void hasResourcePass() {
        assertTrue(Testing.toHaveResource(synthesized, Container.TF_RESOURCE_TYPE) );
    }

    @Test
    void hasResourceWithPropsPass() {
        assertTrue(Testing
                .toHaveResourceWithProperties(synthesized, Container.TF_RESOURCE_TYPE, new HashMap<String, Object>() {
                    {
                        put("dns_opts", new String[] { "1", "2", "3" });
                    }
                }) );
    }

    @Test
    void hasResourceFail() {
        assertFalse(Testing.toHaveResource(synthesized, Config.TF_RESOURCE_TYPE));
    }

    @Test
    void hasResourceWithPropsFail() {
        assertFalse(Testing
                .toHaveResourceWithProperties(synthesized, Container.TF_RESOURCE_TYPE, new HashMap<String, Object>() {
                    {
                        put("dns_opts", new String[] { "11", "22", "33" });
                    }
                }) );
    }

    @Test
    void hasDataPass() {
        assertTrue(Testing.toHaveDataSource(synthesized, DataDockerImage.TF_RESOURCE_TYPE));
    }

    @Test
    void hasDataWithPropsPass() {
        assertTrue(Testing.toHaveDataSourceWithProperties(synthesized, DataDockerImage.TF_RESOURCE_TYPE,
                new HashMap<String, Object>() {
                    {
                        put("name", "nginx:latest");
                    }
                }));
    }

    @Test
    void hasDataFail() {
        assertFalse(Testing.toHaveDataSource(synthesized, DataDockerNetwork.TF_RESOURCE_TYPE) );
    }

    @Test
    void hasDataWithPropsFail() {
        assertFalse(Testing.toHaveDataSourceWithProperties(synthesized, DataDockerImage.TF_RESOURCE_TYPE,
                new HashMap<String, Object>() {
                    {
                        put("name", "wrong");
                    }
                }) );
    }

    @Test
    void isValidTerrformPass() {
        assertTrue(Testing.toBeValidTerraform(fullSynthesized) );
    }

    @Test
    void isValidTerrformFail() {
        assertFalse(Testing.toBeValidTerraform(fullSynthesizedInvalidTerraform) );
    }

}