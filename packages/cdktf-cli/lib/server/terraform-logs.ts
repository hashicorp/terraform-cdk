// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
function extractJsonLogLineIfPresent(logLine: string): string {
  try {
    const extractedMessage = JSON.parse(logLine)["@message"];
    return extractedMessage ? extractedMessage : logLine;
  } catch (e) {
    return logLine;
  }
}

export function extractJsonLogIfPresent(logLines: string): string {
  return logLines
    .split("\n")
    .map(extractJsonLogLineIfPresent)
    .map((line) => line.trim())
    .join("\n");
}
