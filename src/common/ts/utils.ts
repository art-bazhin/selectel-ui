import { html, TemplateResult, render } from 'lit-html';

export function createBemFn(block: string) {
  return function (
    element?: string | null,
    modifiers?: {
      [key: string]: string | boolean;
    }
  ) {
    const baseClass = block + (element ? '__' + element : '');
    let classString = baseClass;

    if (modifiers) {
      Object.keys(modifiers).forEach((key) => {
        if (!modifiers[key]) return;

        const modString =
          modifiers[key] === true ? `${key}` : `${key}_${modifiers[key]}`;

        classString += ` ${baseClass}--${modString}`;
      });
    }

    return classString;
  };
}

export function wrapStory(story: TemplateResult) {
  const r = () => {
    const container = document.getElementById('sui-story')!;

    const isDark = !!localStorage.getItem('sui-theme-dark');
    const isInverted = !!localStorage.getItem('sui-inverted-bg');

    render(
      html`
        <div
          class=${isDark ? ' sui-theme-dark' : ' sui-theme-light'}
          style="height: 100vh"
        >
          <div class="u-p-yellow u-flex">
            <label class="u-flex u-flex-middle" style="cursor: pointer">
              <input
                type="checkbox"
                id="scales"
                @change=${handleThemeChange}
                .checked=${isDark}
              />
              <span class="u-ml-red">Dark Theme</span>
            </label>

            <label
              class="u-flex u-flex-middle u-ml-yellow"
              style="cursor: pointer"
            >
              <input
                type="checkbox"
                id="scales"
                .checked=${isInverted}
                @change=${handleBackgroundChange}
              />
              <span class="u-ml-red">Inverted Background</span>
            </label>
          </div>

          <div
            class="u-p-yellow"
            style=${isInverted ? ' background: var(--sui-theme-fg)' : ''}
          >
            ${story}
          </div>
        </div>
      `,
      container
    );
  };

  const handleThemeChange = () => {
    const isDark = localStorage.getItem('sui-theme-dark');

    if (isDark) {
      localStorage.removeItem('sui-theme-dark');
    } else {
      localStorage.setItem('sui-theme-dark', '1');
    }

    r();
  };

  const handleBackgroundChange = () => {
    const isInverted = localStorage.getItem('sui-inverted-bg');

    if (isInverted) {
      localStorage.removeItem('sui-inverted-bg');
    } else {
      localStorage.setItem('sui-inverted-bg', '1');
    }

    r();
  };

  requestAnimationFrame(r);

  return html` <div id="sui-story"></div> `;
}
