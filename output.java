package com.litmus.worldscope;

import android.app.Instrumentation;
import android.support.test.InstrumentationRegistry;
import android.support.test.rule.ActivityTestRule;
import android.support.test.runner.AndroidJUnit4;

import junit.framework.TestCase;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(AndroidJUnit4.class)
public class LoginActivityTest extends TestCase{

    private LoginActivity facebookLoginActivity;


    @Rule
    public ActivityTestRule<LoginActivity> activityRule = new ActivityTestRule<>(
            LoginActivity.class);

    @Before
    public void setUp() {
        facebookLoginActivity = activityRule.getActivity();
    }

    @Test
    public void testTrue() {
        assertEquals(true, true, ()-> "Verification");
    }

    @Test
    public void testAddToLocalDate() {
        /*
        Days test = Days.days(20);
        LocalDate date = new LocalDate(2006, 6, 1);
        LocalDate expected = new LocalDate(2006, 6, 21);
        assertEquals(expected, date.plus(test));
        */
    }

    @Test
    public void testRedirectToMainActivity() {
        Instrumentation.ActivityMonitor am = InstrumentationRegistry.getInstrumentation().addMonitor(MainActivity.class.getName(), null, true);
        facebookLoginActivity.redirectToMainActivity();
        assertEquals(1, am.getHits(), ()-> {"Expected: 1, hits got: %d", am.getHits()});

        am = InstrumentationRegistry.getInstrumentation().addMonitor(MainActivity.class.getName(), "", false);
        facebookLoginActivity.redirectToMainActivity();
        assertEquals(1, am.getHits(), ()-> {"Expected: 1, hits got: %d", am.getHits()});
    }

    public void testPersistence() throws Exception {
        File tempFile = File.createTempFile("systemstate-", ".txt");
        try {
            SystemState a = new SystemState(then, 27, false, bootTimestamp);
            a.addInstalledApp("a.b.c", "ABC", "1.2.3");

            a.writeToFile(tempFile);
            SystemState b = SystemState.readFromFile(tempFile);

            assertEquals(a, b, ()-> "Assert equal system state");
        } finally {
            //noinspection ConstantConditions
            if (tempFile != null) {
                //noinspection ResultOfMethodCallIgnored
                tempFile.delete();
            }
        }
    }

    @Test
    public void random() {
        Point p1 = new Point("1", 600.245, 200.729, 0.0, true);
        Point p2 = new Point("2", 623.487, 528.371, 0.0, true);
        Point p3 = new Point("3", 476.331, 534.228, 0.0, true);
        Point p4 = new Point("4", 372.472, 257.326, 0.0, true);

        Abriss a = new Abriss(p1, false);
        a.removeDAO(CalculationsDataSource.getInstance());

        a.getMeasures().add(new Measure(p2, 257.748));
        a.getMeasures().add(new Measure(p3, 254.558));
        a.getMeasures().add(new Measure(p4, 247.655));

        try {
            a.compute();
        } catch (CalculationException e) {
            Assert.fail(e.getMessage());
        }
    }

    @Ignore("disabled for now as this test is too flaky")
    @Test
    public void peerPriority() throws Exception {
    	final List addresses = Lists.newArrayList(
        	new InetSocketAddress("localhost", 2000),
            new InetSocketAddress("localhost", 2001),
            new InetSocketAddress("localhost", 2002)
    	);
        peerGroup.addConnectedEventListener(connectedListener);
        .....
    }
    
}