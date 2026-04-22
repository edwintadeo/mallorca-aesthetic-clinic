# Longevity Radar

Digest diario (L-V) de PubMed + bioRxiv/medRxiv + ClinicalTrials.gov sobre
longevidad, well-aging y GLP-1. Generado por un agente Claude Code lanzado
desde GitHub Actions en `.github/workflows/longevity-radar.yml`.

## Cómo funciona

1. Cron dispara el workflow a las 05:00 UTC de L a V.
2. Checkout de la rama `claude/longevity-radar-digest-m85PJ`.
3. Se instala Claude Code CLI y se ejecuta `claude -p` con `prompt.md`.
4. El agente:
   - Decide el tema según día de la semana.
   - Consulta E-utilities, bioRxiv API y ClinicalTrials.gov v2.
   - Escribe `digests/YYYY-MM-DD.md`.
   - Commitea.
   - Envía email por Resend.
5. El workflow hace `git push` del commit.

## Secrets requeridos

Configurar en **Settings → Secrets and variables → Actions**:

| Secret              | Ejemplo                              | Uso                                  |
|---------------------|--------------------------------------|--------------------------------------|
| `ANTHROPIC_API_KEY` | `sk-ant-...`                         | Autentica Claude Code en CI          |
| `RESEND_API_KEY`    | `re_...`                             | Envía el digest por email            |
| `RADAR_EMAIL_TO`    | `edwin@tu-dominio.com`               | Destinatario                         |
| `RADAR_EMAIL_FROM`  | `radar@tu-dominio.com` (verificado)  | Remitente verificado en Resend       |

## Ejecución manual

Desde la pestaña Actions, "Longevity Radar daily digest" → **Run workflow**.
Útil para probar sin esperar al cron.

## Rotación de temas

| Día       | Tema                                                              |
|-----------|-------------------------------------------------------------------|
| Lunes     | GLP-1 × (aging/longevity/cardiovascular/weight maintenance)       |
| Martes    | Biological age, epigenetic clock, biomarcadores                   |
| Miércoles | Senescence, senolytics, mTOR, rapamicina clínica                  |
| Jueves    | GLP-1 × outcomes CV (MACE, HF, renal)                             |
| Viernes   | Cardiovascular/vascular aging, Lp(a), hsCRP, inflammatory burden  |

## Notas

- Sin hallazgos → el agente escribe "Día tranquilo" y igualmente commitea +
  envía email para confirmar que el pipeline está vivo.
- Sábado/domingo → el agente aborta sin commitear ni enviar nada.
- El workflow usa `--dangerously-skip-permissions` porque corre en un runner
  efímero de GitHub. No usar esa flag en local.
