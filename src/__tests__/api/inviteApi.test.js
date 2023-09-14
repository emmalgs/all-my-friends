import { InviteApi } from "../../services/inviteApi";

describe("InviteApi", () => {
  let inviteApi;
  beforeEach(() => {
    inviteApi = new InviteApi();
  });

  describe("constructor", () => {
    it("should create a new instance of the inviteApi", () => {
      expect(inviteApi).toBeInstanceOf(InviteApi);
    });
  });

  describe("getCandidates", () => {
    it("should return 200 response", async () => {
      const response = await inviteApi.getCandidates();
      expect(response[0]).toEqual(
        {
          email: "david.smith@test.com",
          firstName: "David",
          lastName: "Smith",
        });
    });
  });

  describe("sendInvites", () => {
    it("should return a message saying how many friends were invited", async () => {
      const emails = ["sample@sample.net", "greg@greg.com"];
      const response = await inviteApi.sendInvites(emails);
      console.log(response)
      expect(response.message).toEqual("Invites have been sent to 2 friends.");
    });
  });
});
