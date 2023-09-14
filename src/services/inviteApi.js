export class InviteApi {
  constructor() {
    this.baseUrl = "https://olio-interview-homework.herokuapp.com";
    this.authCode = "IGNOREME";
  }

  async getCandidates() {
    const response = await fetch(
      `${this.baseUrl}/invite-candidates?auth=${this.authCode}`
    );
    const data = await response.json();
    return data;
  }

  async sendInvites(emails) {
    const response = await fetch(
      `${this.baseUrl}/invites?auth=${this.authCode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emails),
      }
    );
    const data = await response.json();
    return data;
  }
}
