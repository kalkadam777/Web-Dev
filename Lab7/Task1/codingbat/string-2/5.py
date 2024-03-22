def end_other(a, b):
  a1 = a.lower()
  b1 = b.lower()
  return a1.endswith(b1) or b1.endswith(a1)
