class Inventory < ApplicationRecord
  belongs_to :warehouse
  belongs_to :group

  before_create :slugify

  def slugify:
    self.slug = name.parameterize
  end
end
