
export class InviteApi {
  constructor() {
    this.baseUrl = "https://olio-interview-homework.herokuapp.com";
    this.authCode = process.env.APICODE;
  }

  async getCandidates() {
    const response = await fetch(
      `${this.baseUrl}/invite-candidates?auth=${this.authCode}`
    );
    const data = await response.json();
    return data;
  }

  async sendInvite(email) {
    const response = await fetch(
      `${this.baseUrl}/invites?auth=${this.authCode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    return data;
  }
}