import { InviteApi } from "../../services/inviteApi";

const { startMockServer, stopMockServer } = require("../../mock/mockServer");

describe("inviteApi", () => {
  beforeEach(() => {
    startMockServer();
  });
  afterEach(() => {
    stopMockServer();
  });

  it("should get a list of candidates", async () => {
    const api = new InviteApi("http://localhost:4000", "mock-auth-code");
    const candidates = await api.getCandidates();
    expect(candidates[0]).toEqual({
      firstName: "Mary",
      lastName: "Adams",
      email: "mary.adams@gmail.com",
    });
  });

  // it('should return a message with the number of email invites sent', async () => {
  //   const api = new InviteApi("http://localhost:4000", "mock-auth-code");
  //   const emails = [
  //     "greg@greg.com", 
  //     "grog@grog.com",
  //   ];
  //   const response = await api.sendInvites(emails);
  //   expect(response.message).toEqual("Invites sent to 2 emails");
  // });
});
