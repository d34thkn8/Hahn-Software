import { ClipboardUtils } from './clipboard-utils';
import { ProjectModel } from './../main/home/model/project.interface';
export class ReplacementLib {
  static async replace(project: ProjectModel): Promise<string> {
    return new Promise(async (resolve, reject) => {
      await ClipboardUtils.getText()
        .then(async (copiedText) => {
          project.infoList.forEach((el) => {
            copiedText = this.replaceText(copiedText, el.valueX, el.valueY);
          });
          //here
          await ClipboardUtils.setText(
            this.replaceAddOutParameter(
              this.replaceOracleDbType(
                this.replaceSqlCommandWithString(
                  this.replaceParenthesis(copiedText)
                )
              )
            )
          )
            .then((message) => {
              resolve(message);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static replaceAddOutParameter(text: string): string {
    const lines = text.split('\n');
    const replacedLines = lines.map((line) => {
      if (line.includes('db.AddOutParameter(comando,')) {
        const replacedLine = line.replace(
          'db.AddOutParameter(comando,',
          'comando.Parameters.Add('
        );
        const valueIndex = replacedLine.indexOf(').Value');
        const beforeValue = replacedLine.slice(0, valueIndex);
        const afterValue = replacedLine.slice(valueIndex);
        return `${beforeValue},ParameterDirection.Output${afterValue}`;
      }
      return line;
    });
    return replacedLines.join('\n');
  }
  static replaceSqlCommandWithString(text: string): string {
    var searchString = 'new OracleCommand(';
    const lines = text.split('\n');
    const replacedLines = lines.map((line) => {
      if (line.includes(searchString) && line.trim().endsWith('");')) {
        console.log("Reemplazado")
        const lastIndex = line.lastIndexOf('");');
        const lineWithoutParenthesis = line.slice(0, lastIndex) + '",db);';
        return lineWithoutParenthesis;
      }else{}
      return line;
    });
    return replacedLines.join('\n');
  }
  static replaceCast(text: string): string {
    var searchString = 'new OracleCommand(';
    const lines = text.split('\n');
    const replacedLines = lines.map((line) => {
      if (line.includes(searchString) && line.trim().endsWith('");')) {
        console.log("Reemplazado")
        const lastIndex = line.lastIndexOf('");');
        const lineWithoutParenthesis = line.slice(0, lastIndex) + '",db);';
        return lineWithoutParenthesis;
      }else{}
      return line;
    });
    return replacedLines.join('\n');
  }

  static replaceParenthesis(text: string): string {
    var searchString = ').Value=';
    const lines = text.split('\n');
    const replacedLines = lines.map((line) => {
      if (line.includes(searchString) && line.trim().endsWith(');')) {
        const lastIndex = line.lastIndexOf(')');
        const lineWithoutParenthesis =
          line.slice(0, lastIndex) + ';' + line.slice(lastIndex + 1, -2);
        return lineWithoutParenthesis;
      }
      return line;
    });
    return replacedLines.join('\n');
  }
  static replaceOracleDbType(text: string): string {
    const lines = text.split('\n');
    const replacedLines = lines.map((line) => {
      if (line.includes('OracleDbType.Boolean')) {
        const isTernary = line.includes('? true : false');
        const replacedLine = line.replace(
          'OracleDbType.Boolean',
          'OracleDbType.Int32'
        );
        if (isTernary) {
          const ternaryIndex = replacedLine.lastIndexOf('? true : false');
          const beforeTernary = replacedLine.slice(0, ternaryIndex);
          const afterTernary = replacedLine.slice(ternaryIndex);
          const newTernary = afterTernary
            .replace(/true/g, '1')
            .replace(/false/g, '0');
          return `${beforeTernary}${newTernary}`;
        } else {
          const semicolonIndex = replacedLine.lastIndexOf(';');
          const beforeSemicolon = replacedLine.slice(0, semicolonIndex);
          const afterSemicolon = replacedLine.slice(semicolonIndex);
          return `${beforeSemicolon} ? 1 : 0${afterSemicolon}`;
        }
      }
      return line;
    });
    return replacedLines.join('\n');
  }
  static replaceText(
    mainText: string,
    searchValue: string,
    replacementValue: string
  ): string {
    const searchEscaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(searchEscaped, 'g');
    return mainText.replace(regex, replacementValue);
  }
}
