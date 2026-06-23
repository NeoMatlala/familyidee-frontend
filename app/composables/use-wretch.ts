import wretch from "wretch";

export default function (target: "base") {
  let url: string = "";
  let token: string = "";

  if (target === "base") {
    url =
      "https://familyidee-bchae7bfbed4b8fa.southafricanorth-01.azurewebsites.net";
    token =
      "FamilyIDEE_Prod5pwDJpBHSXq1H8zcGPL38a8565F9qp9Wrlq2dlSiI0vb1oFvPcbnJUQlpw5AWS5Q";
  }

  return wretch(url)
    .content("application/json")
    .accept("application/json, text/plain, */*")
    .auth(`Bearer ${token}`)
    .catcherFallback((error) => {
      throw error;
    });
}
