package imports.terraform_aws_modules.aws;

import static java.util.Arrays.asList;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.Reader;
import java.io.UncheckedIOException;

import java.nio.charset.StandardCharsets;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import software.amazon.jsii.JsiiModule;

@software.amazon.jsii.Internal
public final class $Module extends JsiiModule {
    private static final Map<String, String> MODULE_TYPES = load();

    private static Map<String, String> load() {
        final Map<String, String> result = new HashMap<>();
        final ClassLoader cl = $Module.class.getClassLoader();
        try (final InputStream is = cl.getResourceAsStream("imports/terraform_aws_modules/aws/$Module.txt");
             final Reader rd = new InputStreamReader(is, StandardCharsets.UTF_8);
             final BufferedReader br = new BufferedReader(rd)) {
            br.lines()
              .filter(line -> !line.trim().isEmpty())
              .forEach(line ->  {
                final String[] parts = line.split("=", 2);
                final String fqn = parts[0];
                final String className = parts[1];
                result.put(fqn, className);
            });
        }
        catch (final IOException exception) {
            throw new UncheckedIOException(exception);
        }
        return result;
    }

    private final Map<String, Class<?>> cache = new HashMap<>();

    public $Module() {
        super("rds", "0.0.0", $Module.class, "rds@0.0.0.jsii.tgz");
    }

    @Override
    public List<Class<? extends JsiiModule>> getDependencies() {
        return asList(com.hashicorp.cdktf.$Module.class, software.constructs.$Module.class);
    }

    @Override
    protected Class<?> resolveClass(final String fqn) throws ClassNotFoundException {
        if (!MODULE_TYPES.containsKey(fqn)) {
            throw new ClassNotFoundException("Unknown JSII type: " + fqn);
        }
        String className = MODULE_TYPES.get(fqn);
        if (!this.cache.containsKey(className)) {
            this.cache.put(className, this.findClass(className));
        }
        return this.cache.get(className);
    }

    private Class<?> findClass(final String binaryName) {
        try {
            return Class.forName(binaryName);
        }
        catch (final ClassNotFoundException exception) {
            throw new RuntimeException(exception);
        }
    }
}
