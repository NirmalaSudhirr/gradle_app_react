export class CharacterStatus {
  constructor(operation, date, time, characterName, overallStatus, status) {
    this.operation = operation || '';
    this.date = date || '';
    this.time = time || '';
    this.characterName = characterName || '';
    this.overallStatus = overallStatus || '';
    this.status = status || '';
  }

  static fromJson(json) {
    return new CharacterStatus(
      json.Operation?.toString() || '',
      json.Date?.toString() || '',
      json.Time?.toString() || '',
      json.CharacterName?.toString() || '',
      json.OverallStatus?.toString() || '',
      json.Status?.toString() || ''
    );
  }
}
