class IdDataObject {
  currentIndex = 0;

  generate(): string {
    const signature = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    this.currentIndex += 1;

    return `${this.currentIndex}#${signature}`;
  }
}

export default new IdDataObject();
