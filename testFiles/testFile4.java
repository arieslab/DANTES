public class TagEncodingTest extends BrambleTestCase {
	private final CryptoComponent crypto;
	private final SecretKey tagKey;
	private final long streamNumber = 1234567890;

	public TagEncodingTest() {
		crypto = new CryptoComponentImpl(new TestSecureRandomProvider());
		tagKey = TestUtils.getSecretKey();
	}

	@Test
	public void testKeyAffectsTag() throws Exception {
		Set set = new HashSet<>();
		for (int i = 0; i < 100; i++) {
			byte[] tag = new byte[TAG_LENGTH];
			SecretKey tagKey = TestUtils.getSecretKey();
			crypto.encodeTag(tag, tagKey, PROTOCOL_VERSION, streamNumber);
			assertTrue(set.add(new Bytes(tag)));
		}
	}
}
         