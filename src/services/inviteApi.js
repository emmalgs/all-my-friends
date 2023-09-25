export class InviteApi {
  constructor(baseUrl, authCode) {
    this.baseUrl = baseUrl;
    this.authCode = authCode;
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
