export function getCard(img) {
  const { alt_description, urls } = img;
  return `   <li>
        <a href="${urls.regular}">
          <img src="${urls.small}" alt="${alt_description}" class='img'>
            <p>${alt_description}</p>
          </img>
        </a>
      </li>`;
}
